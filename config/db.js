require("dotenv").config();
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

let sql = "SELECT * FROM post"

pool.execute(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    result.forEach((res) => {
        console.log(res.title)
    })
    // pool.end(); // close the connection after query execution to free up resources.  Note: this is a synchronous operation.  If you want to use async/await, you'd need to use an async function and a try/catch block instead.  This is a basic example.  In a real-world application, you'd want to handle errors properly.  For example, you might want to log the error and continue processing other records.  For example:
})

module.exports = pool.promise();