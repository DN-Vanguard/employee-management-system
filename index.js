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

// Checking department's budget (if selection was chosen)
const selectDepartmentBudgetTable = async () => {
    let chooseDepartmentQuestions  = [];
    try {
        const table = await db.query(queries.departments);
        let deptArray = table.map(dept => ({
            name: dept.name,
            value: dept.id
        }));
        chooseDepartmentQuestions.push(constructListQuestion("Choose a department to view budget", "department", deptArray));
    } catch (err) {
        console.log(err);
    }
    inquirer
        .prompt(chooseDepartmentQuestions)
        .then(async (choosenDepartment) => {
            const department = choosenDepartment.department;
            try {
                const budgetTable = await db.query(queries.budget, department);
                if(budgetTable[0].department === null) {
                    console.log('\x1b[32m', `This department has no employees.`, '\x1b[0m');
                } else {
                    viewTable(budgetTable);
                }
                return askForCategory();
            } catch (err) {
                console.log(err);
            }
        });
}

// Adding a department to database
const addDepartment = () => {
    inquirer
        .prompt(questions.addDepartment)
        .then(async (addDepartmentAnswer) => {
            const deptName = addDepartmentAnswer.name;
            try {
                await db.query(queries.insertDepartment, deptName);                
                console.log('\x1b[32m', `Added ${deptName} to the database.`, '\x1b[0m');
                return askForCategory();
            } catch (err) {
                console.log(err);
            }
        });
}
// Removing a department
const deleteDepartment = async () => {
    let chooseDepartmentQuestions  = [];
    try {
        const table = await db.query(queries.departments);
        let deptArray = table.map(dept => ({
            name: dept.name,
            value: dept.id
        }));
        chooseDepartmentQuestions.push(constructListQuestion("Choose a department to delete", "department", deptArray));
    } catch (err) {
        console.log(err);
    }
    inquirer
        .prompt(chooseDepartmentQuestions)
        .then(async (choosenDepartment) => {
            const department = choosenDepartment.department;
            try {
                await db.query(queries.delete('department'), department);
                console.log('\x1b[33m', `Deleted department from the database.`, '\x1b[0m');
                return askForCategory();
            } catch (err) {
                console.log(err);
            }
        });
}
// Ask the user for what action they want to take with departments
const askForDepartmentAction = () => {
    inquirer
        .prompt(questions.department)
        .then((departmentAnswer) => {
            switch(departmentAnswer.action) {
                case "View All Departments":
                    return selectDepartmentTable();
                case "View Department Budget":
                    return selectDepartmentBudgetTable();
                case "Add A Department":
                    return addDepartment();
                case "Delete A Department":
                    return deleteDepartment();
            }
        });
}