// input uniqu criteria

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;

// const engineerPromt = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'gitHub',
//             message: 'What is your GitHub user name?',
//         },
//     ])
// }