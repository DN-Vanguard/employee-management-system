# Employee-Management-System

## Description

## Walkthrough Video

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```
## Installation

 `Node.js` is required on your local machine to run this app.
You can then run it in VSCode and open an `integrated terminal` of the root folder.
Before use, run `npm install` or `npm i` (for short) to load any dependencies such as Inquirer and mySQL2 to the folder.

The gitignore provided will bypass the original `.env` file, therefore, in the root folder create a `.env` file and paste this line of code changing password to your MySQL root user password: `DB_PASS=password`.

To setup the database, login to the MySQL shell using `mysql -u root -p` and then run the schema file with `source db/schema.sql`.

You may use the `seeds.sql` file provided to populate example tables to the database or clear the database and add your own data.

## Usage

After installation, the app can be run using `node index.js` in the command line within the terminal.

## Technologies
(See `package.json` file for more detail)
- Node.js
- MySQL2
- Inquirer
- Dotenv
