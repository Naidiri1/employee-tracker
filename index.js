const inquirer = require("inquirer");
const cTable = require('console.table');
console.table([
    {
      name: 'foo',
      age: 10
    }, {
      name: 'bar',
      age: 20
    }
  ]);
  


const options =  [
     {
    type: 'list',
    name: 'teamMembers',
    message: " What would you like to do?",
    choices: [
        "View All Employees", 
        "Add Employee", 
        "Update Employee Role", 
        "View all Roles", 
        "Add Role", 
        "View All Departments", 
        "Add department", 
        "Quit"
    ]
},
]

function optionsPrompt(){
    inquirer
    .prompt(options)
    // prompt for if they want to build an engineer, intern, or build team
    .then((response) => {
        console.log(response)
// if the user choose from the options "View All Employees",
if (response.teamMembers === "View All Employees"){
    //show data of employees
 }
// if the user choose from the options "Add employee",
if (response.teamMembers === "Add employee"){
    //add employee 
 }

 // if the user choose from the options "Update Employee Role" ,
if (response.teamMembers === "Update Employee Role"){
    //update employee in table 
 }

// if the user choose from the options "View all Roles",
if (response.teamMembers ===  "View all Roles"){
    //show data of roles
}

// if the user choose from the options "Add Role",
if (response.teamMembers ===  "Add Role"){
    //add role in roles table 
}
// if the user choose from the options 'View All Departments'
if (response.teamMembers === 'View All Departments'){
   //show data of departments
}

// if the user choose from the options Add department",
if (response.teamMembers ===  "Add department"){
    //add department in table 
}
// if the user choose from the options "Quit",
if (response.teamMembers ===  "Quit"){
    //close terminal  
}

 })
}

 const addDepartment = [
    {
        type: "input",
        name: "department",
        message: "What is the name of the department?"
    }
 ]
 
 const addRole = [
    {
        type: "input",
        name:"role",
        message: "What is the name of the role?"
    },
    {
        type: "input",
        name:"roleSalary",
        message: "What is the salary of the role?"
    },
    {
        type: "list",
        name:"roleDepartment",
        message: "Which department does the role belong to?",
        choices: ["Engineering", "Finance", "Sales", "Services"]
   //choices roles.data
    }
 ]

const addEmployee =
    [
       {
            type: "input",
            name: "employeeName",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "employeeLastName",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "employeeRole",
            message: "What is the employee's role?",
            choices:["Sales Lead", "SAles Person", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"]
        }, 
        {
            type: "input",
            name: "employeesManager",
            message: "Who is the employee's manager?",
            choices:["None", "Michael Brown", "Tom Perez", "Ernesto Sanchez", "Karla Potts"]
        },
       // return optionsPrompt()
     ]

const updateEmployee =[
    {
        type: "list",
        name: "updateEmployee",
        message: "Which employee's role do you want to update?",
      // choices: [employees.data]
    },
    {
        type: "list",
        name: "updateRole",
        message: "Which role do you want to assign to the selected employee?",
      // choices: [roles.data]
    }
]

 optionsPrompt();