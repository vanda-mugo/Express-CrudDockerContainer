import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);

// Create a new pool instance
// This will allow us to connect to the PostgreSQL database
// The pool will manage multiple client connections
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


pool.on("connect", () => {
  console.log("Connected to the PostgreSQL database");
  console.log("connection pool has been established")
});
export default pool;


/**
 * This script sets up a connection to a PostgreSQL database for your Express application:

import pkg from "pg"; const { Pool } = pkg;: Imports the PostgreSQL client library and gets the Pool class, which manages multiple database connections efficiently.
import dotenv from "dotenv"; dotenv.config();: Loads environment variables from your .env file, so sensitive info like database credentials are not hardcoded.
console.log(process.env.DB_USER); console.log(process.env.DB_HOST);: Prints the database user and host to the console for debugging.
const pool = new Pool({...}): Creates a new connection pool using credentials from environment variables (DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT).
pool.on("connect", ...): Logs a message when a connection to the database is established.
export default pool;: Exports the pool so other parts of your app can use it to query the database.
 */