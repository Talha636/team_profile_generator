const Employee = require('./employee');

class Manager extends Employee {
    constructor(role, name, id, email, officeNumber) {
        super(role, name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;