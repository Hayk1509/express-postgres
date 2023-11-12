import pool from "../../db.js";
import {
  checkIsEmailValid,
  deleteStudentQuery,
  getStudentQuery,
  getStudentsQuery,
  setStudentQuery,
  updateStudentQuery,
} from "./queries.js";

export const getStudentsController = (req, res) => {
  pool.query(getStudentsQuery, (error, result) => {
    console.log(result);
    try {
      res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
    }
  });
};
export const getStudentController = (req, res) => {
  pool.query(getStudentQuery, [req.params.id], (error, result) => {
    try {
      res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
    }
  });
};
export const postStudentController = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(checkIsEmailValid, [email], (error, result) => {
    if (result.rows.length) {
      res.send("Email already exists.");
    } else {
      pool.query(setStudentQuery, [name, email, age, dob], (error, result) => {
        try {
          res.status(201).send("Student successfully added");
        } catch (error) {
          console.log(error);
        }
      });
    }
  });
};

export const deleteStudentController = (req, res) => {
  const { id } = req.params;
  pool.query(deleteStudentQuery, [id], (error, result) => {
    try {
      res.status(201).send("Student successfully deleted");
    } catch (error) {
      console.log(error);
    }
  });
};

export const changeStudentController = (req, res) => {
  const { id } = req.params;
  pool.query(getStudentQuery, [+id], (error, result) => {
    const { rows } = result;
    if (rows.length) {
      const { name } = req.body;
      pool.query(updateStudentQuery, [+id, name], (error, result) => {
        try {
          res.send({
            statusText: "Student successfully changed",
          });
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      res.send("Student not found");
    }
  });
};
