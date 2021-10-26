const Employee = require('./employee');

class Engineer extends Employee {
    constructor(role, name, id, email, github) {
        super(role, name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;