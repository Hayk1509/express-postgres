export const getStudentsQuery = "SELECT * from students";
export const getStudentQuery = "SELECT * FROM students WHERE id = $1";
export const setStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
export const checkIsEmailValid = "SELECT s FROM students s WHERE s.email = $1";
export const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
export const updateStudentQuery =
  "UPDATE students SET name = $2 WHERE id = $1";
