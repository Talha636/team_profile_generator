const Employee = require('./employee');

class Intern extends Employee {
    constructor(role, name, id, email, school) {
        super(role, name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;