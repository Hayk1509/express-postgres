import { comparePassword, hash } from "../helpers/passwordHash.js";
import { createNewUsers, getUser, setUserPicture } from "../queries/userQueries.js";

import emailValidation from "../helpers/emailValidation.js";
import { generateAccessToken } from "../utilitis/tokenManager.js";
import isStrongPassword from "../helpers/isPasswordStrong.js";
import pool from "../../db.js";

export const createNewUserController = (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = hash(password);
  if (emailValidation(email) && isStrongPassword(password)) {
    pool.query(
      createNewUsers,
      [name, email, hashPassword],
      (error, result) => {
        if (error) {
          res.send(error.detail);
        } else {
          const resData = { name, email}
          const user = {
            email: email,
          };
          const accessToken = generateAccessToken({ user });
          res.header("authorization", accessToken).send({
            ...resData,
            authorization: accessToken,
          });
        }
      }
    );
  }
};

export const loginController = (req, res) => {
  const { email, password } = req.body;
  pool.query(getUser, [email], (error, result) => {
    const { password: hash, surename, email, name,picture } = result.rows[0];
    const resData = { name,surename,email, picture}
    if (error) error.detail;
    if (comparePassword(password, hash)) {
      const user = {
        email: email,
      };
      const accessToken = generateAccessToken({ user });
      res.header("authorization", accessToken).send({
        ...resData,
        authorization: accessToken,
      });
    } else {
      res.send("Email or password is wrong");
    }
  });
};

export const addUerPictureController = (req,res) => {
  const { picture, email } = req.body;
  pool.query(setUserPicture,[picture,email], (error,result)=>{
    if(error){
      res.send('Something went wrong')
    }else {
      res.send({picture})
    }
  })
}
