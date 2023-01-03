class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;


// const promptUser = () => {
//   return inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is your employee id?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your emial address?',
//     },
//     {
//         type: 'input',
//         name: 'Phone',
//         message: 'What is your Phone Number?',
//     },
//   ]);
// };
