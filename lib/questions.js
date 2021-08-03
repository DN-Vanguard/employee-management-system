// Inquirer questions in array
const questions = {
    category: [ //starting node application
        {
            type: "list",
            message: "Please select a category to view.",
            name: "category",
            choices: [
                "Departments",
                "Roles",
                "Employees"
            ]
        }
    ],
    department: [ // department selection
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "View All Departments",
                "View Department Budget",
                "Add A Department",
                "Delete A Department"
            ]
        }
    ],
    addDepartment: [ //adding department
        {
            type: "input",
            message: "What is the name of the new department?",
            name: "name",
            validate: (input) => {
                if(input !== "") return true;
                return "Please enter a department name.";
            }
        }
    ],
    role: [ // Role selection
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "View All Roles",
                "Add A Role",
                "Delete A Role"
            ]
        }
    ],
    addRole: [ //adding a new role
        {
            type: "input",
            message: "What is the title of the new role?",
            name: "title",
            validate: (input) => {
                if(input !== "") return true;
                return "Please enter a title for the this role.";
            }
        },
        {
            type: "input",
            message: "What is the salary for the new role?",
            name: "salary",
            validate: (input) => {
                if(input !== "" && /^\d+$/.test(input)) return true;
                return "Please enter a numeric salary without the $ symbol.";
            }
        }
    ],
    employee: [ //employee selection
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "View All Employees",
                "View Employees by Manager",
                "View Employees by Department",
                "Add An Employee",
                "Update An Employee's Role",
                "Update An Employee's Manager",
                "Delete An Employee"
            ]
        }
    ],
    addEmployee: [ //adding a new employee
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: "first_name",
            validate: (input) => {
                if(input !== "" && !(/\d/.test(input))) return true;
                return "Please enter a first name without numbers.";
            }
        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "last_name",
            validate: (input) => {
                if(input !== "" && !(/\d/.test(input))) return true;
                return "Please enter a last name without numbers.";
            }
        },
    ],
}
module.exports = questions;