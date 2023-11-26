import bcrypt from "bcrypt";

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

export const hash = (myPlaintextPassword) =>
  bcrypt.hashSync(myPlaintextPassword, salt);
export const comparePassword = (password, hash) =>  bcrypt.compareSync(password, hash)
