const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee")
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
let intern;
let engineer;
let manager;


function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of your manager?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?"
            }
        ])
        .then((Employee) => {
            manager = new Manager(Employee.name, Employee.id, Employee.email, Employee.officeNumber)
            addEmployee()
        })
    }
    const addEmployee = () => {
        inquirer.prompt({
            type: "list",
            name: "next",
            message: "How would you like to cointinue building your team?",
            choices: [
                "Add an Engineer.",
                "Add an Intern.",
                "I'm done building my team."
            ]
        })
            .then(answer => {
                if (answer.next == "Add an Engineer.") {
                    addEngineer()
                } else if (answer.next == "Add an Intern."){
                    addIntern()
                }
            else {
                generateHTML()
            }
            })
    }

    const addEngineer = () => {
        inquirer.prompt(
            [
                {
                    type: "input",
                    name: "name",
                    message: "What is your name engineer?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the ID number of this engineer?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the email address of the engineer?"
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the github username of the engineer?"
                }
            ])
            .then(engineerData => {
                engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
                addEmployee()
            })

    }
    const addIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the intern?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID number of your the intern?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the email address of the intern?"
            },
            {
                type: "input",
                name: "school",
                message: "Where does this intern go to school?"
            }
        ])
            .then(internData => {
                intern = new Intern(internData.name, internData.id, internData.email, internData.school)
                addEmployee()
            })
    }


const generateHTML = () => fs.writeFileSync( "Team.html",  `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-dark bg-danger">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Profile</span>
        </div>
    </nav>
    <div class ="container-fluid">
        <div class ="row justify-content-around">
            <div class="card col-12 col-md-6 col-lg-4">
                <div class="card-header">
                  ${manager.name}
                  ${manager.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email:  <a href = "mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
            <div class="card col-12 col-md-6 col-lg-4">
<div class="card-header">
  ${intern.name}
  ${intern.getRole()}
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email:  <a href = "mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
</ul>
</div>
<div class="card col-12 col-md-6 col-lg-4">
<div class="card-header">
  ${engineer.name}
  ${engineer.getRole()}
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email:  <a href = "mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">Github: ${engineer.github}</li>
</ul>
</div>
`)
// WriteFileSync as a promise
const init = () => {
    promptUser()
};


init();













