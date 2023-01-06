// Setting a constroctor to pull name, id, and email.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName is Setting the value of the name input from the question asked.
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
     // GetRole= a string that gets returned when called on line 22
    getRole() {
        return "Employee";
    }
}
// exporting the file Employee
module.exports = Employee;
