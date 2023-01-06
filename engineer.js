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
// exporting the file Engineer
module.exports = Engineer;
