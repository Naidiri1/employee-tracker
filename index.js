const inquirer = require("inquirer");
const mysql = require("mysql2");
const { response } = require("express");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "password",
    database: "manager_db",
  },
  console.log(`Connected to manager_db database.`)
);

// ptions prompt for the user
const options = [
  {
    type: "list",
    name: "teamMembers",
    message: " What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View all Roles",
      "Add Role",
      "View All Departments",
      "Add department",
      "Quit",
    ],
  },
];
// To check on each option
function optionsPrompt() {
  inquirer
    .prompt(options)
    // prompt for if they want to build an engineer, intern, or build team
    .then((response) => {
      //   console.log(response);
      // if the user choose from the options "View All Employees",
      if (response.teamMembers === "View All Employees") {
        //show data of employees
        viewEmployees();
      }
      // if the user choose from the options "Add employee",
      if (response.teamMembers === "Add Employee") {
        //add employee data
        addEmployee();
      }

      // if the user choose from the options "Update Employee Role" ,
      if (response.teamMembers === "Update Employee Role") {
        //update employee in table
        updateEmployee();
      }

      // if the user choose from the options "View all Roles",
      if (response.teamMembers === "View all Roles") {
        //show data of roles
        viewRole();
      }

      // if the user choose from the options "Add Role",
      if (response.teamMembers === "Add Role") {
        //add role in roles table
        addRole();
      }
      // if the user choose from the options 'View All Departments'
      if (response.teamMembers === "View All Departments") {
        //show data of departments
        viewDepartment();
      }

      // if the user choose from the options Add department",
      if (response.teamMembers === "Add department") {
        //add department in table
        addDepart();
      }
      // if the user choose from the options "Quit",
      if (response.teamMembers === "Quit") {
        //close terminal
        process.exit();
      }
    });
}
// Adding function to show data from department table
function viewDepartment() {
  db.query("SELECT * FROM department;", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.table(res);
    optionsPrompt();
  });
}

//  Adding function to show data from role table
function viewRole() {
  db.query(
    "SELECT department_id, title, department.name AS name, salary FROM role INNER JOIN department ON role.department_id = department.id;",
    (err, res) => {
      if (err) {
        console.log(err);
      }
      console.table(res);
      optionsPrompt();
    }
  );
}
// Adding function to show data from employee table
function viewEmployees() {
  db.query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, role.salary AS salary, manager.first_name AS manager FROM employee LEFT JOIN role ON employee.role_id = role.role_id LEFT JOIN employee manager ON employee.manager_id = manager.id LEFT JOIN department ON role.department_id = department.id;",
    (err, res) => {
      if (err) {
        console.log(err);
      }
      console.table(res);
      optionsPrompt();
    }
  );
}
// Adding function to add a department in department table
function addDepart() {
  inquirer.prompt(addDepartment).then((response) => {
    console.log(response);
    db.query(
      "INSERT INTO department (name) VALUES (?)",
      response.department,
      (err, res) => {
        if (err) {
          console.log(err);
        }
        console.table(res);
        optionsPrompt();
      }
    );
  });
}

// Adding function to add a role in role table
function addRole() {
  db.query(
    "SELECT department.id, department.name FROM department;",
    (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log("Showing Available Departments...");
      console.table(res);
      let departmentIds = res;
      let ids = [];
      departmentIds.forEach((id) => {
        ids.push(id.id);
      });
      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the name of the role?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary of the role?",
          },
          {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            choices: ids,
          },
        ])
        .then((response) => {
          console.log(response);
          db.query("INSERT INTO role SET ?", response, (err, res) => {
            if (err) {
              console.log(err);
            }
            console.log("Role created!");
            optionsPrompt();
          });
        });
    }
  );
}

// Adding functio to add an employee in employee table
function addEmployee() {
  db.query("SELECT role_id, title FROM role", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log("Showing Roles...");
    console.table(res);
    let roleIds = res;
    let ids = [];
    roleIds.forEach((id) => {
      ids.push(id.role_id);
    });
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the employee's name?",
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?",
        },
        {
          type: "list",
          name: "role_id",
          message: "What is the employee's role?",
          choices: ids,
        },
      ])
      .then((response) => {
        console.log(response);
        db.query("INSERT INTO employee SET ?", response, (err, res) => {
          if (err) {
            console.log(err);
          }
          console.log("employee created!");
          optionsPrompt();
        });
      });
  });
}

// Adding function to show employees and update it in employee table
function updateEmployee() {
  // Show all employees id, first name, last name
  db.query(
    "SELECT employee.id, employee.first_name, employee.last_name FROM employee;",
    (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log("Showing Employees...");
      console.table(res);
      let ids = [];
      res.forEach((employee) => {
        ids.push(employee.id);
      });
      inquirer
        .prompt([
          {
            type: "list",
            name: "id",
            message: "Which employee's role do you want to update?",
            choices: ids,
          },
        ])
        .then((response) => {
          let employeeID = response.id;
          // show all role id and title
          db.query("SELECT role_id, title FROM role", (err, res) => {
            if (err) {
              console.log(err);
            }
            console.log("Showing Roles...");
            console.table(res);
            let roleIds = res;
            let ids = [];
            roleIds.forEach((id) => {
              ids.push(id.role_id);
            });
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "role_id",
                  message:
                    "Which role do you want to assign to the selected employee?",
                  choices: ids,
                },
              ])
              .then((response) => {
                console.log(response);
                db.query(
                  "UPDATE employee SET role_id = ? WHERE id = ?;",
                  [response.role_id, employeeID],
                  (err, res) => {
                    if (err) {
                      console.log(err);
                    }
                    console.log("Employee Updated!");
                    optionsPrompt();
                  }
                );
              });
          });
        });
    }
  );
}

// Call function to start app
optionsPrompt();
