import pg from "pg";
import dotenv from "dotenv"
import dbConfig from "./dbConfig";

dotenv.config();

const pool = new pg.Pool({
 ...dbConfig
});

pool.connect((err, client, done) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
    // You can execute queries or perform other operations here
    done(); // Release the client back to the pool
  }
});

export default pool;
