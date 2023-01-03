// input uniqu criteria

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;


// const managerPromp = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'What is your name?',
//         },
//     ])
// }