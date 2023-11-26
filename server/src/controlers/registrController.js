import pool from "../../db.js";
import { createNewUsers, getUser } from "../queries/registerQueries.js";
import emailValidation from "../helpers/emailValidation.js";
import isStrongPassword from "../helpers/isPasswordStrong.js";
import { hash, comparePassword } from "../helpers/passwordHash.js";
import {
  generateAccessToken,
} from "../utilitis/tokenManager.js";

export const createNewUserController = (req, res) => {
  const { name, surname, email, age, password } = req.body;
  const hashPassword = hash(password);
  if (emailValidation(email) && isStrongPassword(password)) {
    pool.query(
      createNewUsers,
      [name, surname, email, age, hashPassword],
      (error, result) => {
        if (error) {
          res.send(error.detail);
        } else {
          res.status(201).send("User successfully created");
        }
      }
    );
  }
};

export const loginController = (req, res) => {
  console.log(req);
  const { email, password } = req.body;
  pool.query(getUser, [email], (error, result) => {
    const { password: hash } = result.rows[0];
    if (error) error.detail;
    if (comparePassword(password, hash)) {
      const user = {
        username: email,
      };
      const accessToken = generateAccessToken({ user });
      res
        .header("authorization", accessToken)
        .send({
          ...user,
          authorization: accessToken,
        });
    } else {
      res.send("Email or password is wrong");
    }
  });
};
