export const createTableQuery = `CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"surename" VARCHAR(50),
	"email" VARCHAR(100) NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
	"picture" BYTEA
    )`

export const createNewUsers = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';

export const getUser = 'SELECT * FROM users WHERE email = $1';
export const getUserPicture = 'SELECT picture FROM users WHERE email = $1';
export const setUserPicture = 'UPDATE Users SET picture = $1 WHERE email = $2'