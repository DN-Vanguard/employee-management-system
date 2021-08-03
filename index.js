// Required modules
require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const util = require('util');
const questions = require('./lib/questions');
const queries = require('./lib/queries');

// Connect to the employees_db
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: process.env.DB_PASS,
      database: 'employees_db'
    },
);

// Turn database queries into a promise
db.query = util.promisify(db.query);

// Display the table to the console
const viewTable = (table) => {
    console.log('\n');
    console.table(table);
    console.log('\n');
}

// View the data on the 'department' table
const selectDepartmentTable = async () => {
    try {
        const table = await db.query(queries.departments);
    
        viewTable(table);

        return askForCategory();

    } catch (err) {
        console.log(err);
    }
}