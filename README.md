# 12 SQL: Employee Tracker

table of contents
  - [About the project](#abouttheproject)
  - [Installation](#installation)
  - [description](#description)
  - [Usage](#usage)
  - [Credits](#credits)
  - [license](#license)

  ## About the project 
  The main purpose of the project is to manage data like departments, roles, and employees from the user's needs so he can organize and plan his business. Everything runs from the command line and be able to connect with Node.js, inquirer ans MySQL. The user can use the command line to acces to the data base called `manager_db` using `node index.js`. This app helps the user to have acces to this data and not being visible to the GUI. This app guides the user to have data organized and being able to modify it with the guide from the command line. The app has a guideness with questions and answering them by multiple choice or the user's input.

  ## Installation

  In order to be able to use the employeer tracker, the user needs to install a package.json by using the command line `npm init` then the user will install inquirer by using `npm inquirer@8.2.4` in the command line and the `modules` will be installed too with the `package-lockjson` and also install mysql2 using `npm i mysql2@2.2.5` and express using `npm i express@4.17.1` in the command line.

  ## Description 

  This project is for everyone who is sinterested in manage data from an specific team and be able to modify by adding, deleting, updating or create data 'CRUD'. and the user has a guideness with the questions prompt from the command line to use the data based on his needs.

  ## Usage 

  The main reason of this app is as its name keeps track of specifi data from a team and be able to manage it with the command line.  The user will open the command line once all the installation has been done and write `node index.js` and a list of options will be prompt like "View All Employees", 
        "Add Employee", 
        "Update Employee Role", 
        "View all Roles", 
        "Add Role", 
        "View All Departments", 
        "Add department", 
        "Quit"

Then the user chooses based on the options and he will be able to use CRUD to modify the data. Also there will be questions for the user to write like "What is the name of the role?", "What is the salary of the role?". 
Once the user has finished the options 'quit' will close the app and save the changes from the user.

- screenshot of the command line ![screenshot of the command line](./ims%20for%20readme%20file/command-line.jpg)
- sample of the data stored ![screenshot of the data in tables](./ims%20for%20readme%20file/command-line1.jpg)
- sample of the command line ![screenshot of adding employee](./ims%20for%20readme%20file/examplecommand-line%20.jpg)

- Video link of the app employee-tracker [Video of the app using the command line ](https://app.castify.com/view/525fbc18-1554-4f6e-b3fe-fabfcd0ead7d)

## Credits 

N/A

## License 
N/A
