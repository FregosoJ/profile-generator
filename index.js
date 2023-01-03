const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./employee")
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");


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
        .then((employee) => {
            generateHTML();
        })
}

const addEmployee = {
    type: "list",
    name: "next",
    message: "How would you like to cointinue building your team?",
    choices: [
        "Add an Engineer.",
        "Add an Intern.",
        "I'm done building my team."
    ]
}

const addEngineerQs = [
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
]

const addInternQs = [
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
]

const generateHTML = (Manager) => `
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
                  ${Manager}
                  ${Manager.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${Manager.id}</li>
                    <li class="list-group-item">Email: ${Manager.email}</li>
                    <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
                </ul>
            </div>
            <div class="card col-12 col-md-6 col-lg-4">
<div class="card-header">
  ${Intern.name}
  ${Intern.getRole()}
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Intern.id}</li>
    <li class="list-group-item">Email: ${Intern.email}</li>
    <li class="list-group-item">School: ${Intern.getSchool()}</li>
</ul>
</div>
<div class="card col-12 col-md-6 col-lg-4">
<div class="card-header">
  ${Engineer.name}
  ${Engineer.getRole()}
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Engineer.id}</li>
    <li class="list-group-item">Email: ${Engineer.email}</li>
    <li class="list-group-item">Github: ${Engineer.github}</li>
</ul>
</div>
`
// WriteFileSync as a promise
const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};


init();
addEmployee();
addEngineerQs();
addInternQs();
generateHTML();












