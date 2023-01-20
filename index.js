const inquirer = require("inquirer");

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
    })
}

optionsPrompt();