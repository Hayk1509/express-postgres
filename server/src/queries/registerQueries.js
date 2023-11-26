export const createTableQuery = `CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"surname" VARCHAR(50) NOT NULL,
	"email" VARCHAR(100) NOT NULL UNIQUE,
	"age" INT NOT NULL,
    "password" TEXT NOT NULL
    )`

export const createNewUsers = 'INSERT INTO users (name, surname, email, age, password) VALUES ($1, $2, $3, $4, $5)';

export const getUser = 'SELECT * FROM users WHERE email = $1';