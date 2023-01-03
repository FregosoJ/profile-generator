// input uniqu criteria

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;


// const interPromt = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'school',
//             message: 'What school did you attend?',
//         },
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?',
//         }
//     ])
// }