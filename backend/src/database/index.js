import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "user-db",
});

connection.connect(() => {
    console.log("Sucess database connection");
});

export default connection;
