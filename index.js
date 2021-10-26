const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateTeam');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let team = [];

const newEmployee = [
    {
        type: 'list',
        name: 'employeeRole',
        message: 'Choose the employee position.',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'Enter employee name.',
        validate: ans => {
            if(ans) {
                return true;
            } else {
                console.log('Employee name cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter employee ID.',
        validate: ans => {
            if(ans) {
                return true;
            } else {
                console.log('Employee ID cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Enter the employee email.',
        validate: ans => {
            if(ans) {
                return true;
            } else {
                console.log('Employee email cannot be blank');
                return false;
            }
        }
    }
]

const managerQuestion = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the managers office number.',
        validate: ans => {
            if(ans) {
                return true;
            } else {
                console.log('Office number cannot be blank.');
                return false;
            }
        }
    }
]

const engineerQuestion = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter the engineers github username.',
        validate: ans => {
            if(ans) {
                return true;
            } else {
                console.log('Github username cannot be blank.');
                return false;
            }
        }
    }
]

const internQuestion = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter the interns school name.',
        validate: ans => {
            if(ans) {
                return true;
            } else {
                console.log('School name cannot be blank.');
                return false;
            }
        }
    }
]

const addAnotherEmployee = [
    {
        type: 'confirm',
        name: 'anotherEmployee',
        message: 'Would you like to add another employee?'
    }
]

function addTeam() {
    inquirer.prompt(newEmployee).then((answer) => {
        if (answer.employeeRole === 'Manager') {
            inquirer.prompt(managerQuestion).then((managerOfficeNumber) => {
                console.log(answer, managerOfficeNumber);
                const managers = new Manager(answer.employeeRole, answer.employeeName, answer.employeeId, answer.employeeEmail, managerOfficeNumber);
                team.push(managers);
                inquirer.prompt(addAnotherEmployee).then((response) => {
                    if (response.anotherEmployee === true) {
                        addTeam();
                    } else {
                        return;
                    }
                })
            })
        } else if (answer.employeeRole === 'Engineer') {
            inquirer.prompt(engineerQuestion).then((engineerGithub) => {
                console.log(answer, engineerGithub);
                const engineers = new Engineer(answer.employeeRole, answer.employeeName, answer.employeeId, answer.employeeEmail, engineerGithub);
                team.push(engineers);
                inquirer.prompt(addAnotherEmployee).then((response) => {
                    if (response.anotherEmployee === true) {
                        addTeam();
                    } else {
                        return;
                    }
                })
            })
        } else {
            inquirer.prompt(internQuestion).then((internSchool) => {
                console.log(answer, internSchool);
                const interns = new Intern(answer.employeeRole, answer.employeeName, answer.employeeId, answer.employeeEmail, internSchool);
                team.push(interns);
                inquirer.prompt(addAnotherEmployee).then((response) => {
                    if (response.anotherEmployee === true) {
                        addTeam();
                    } else {
                        return;
                    }
                })
            })
        }
    })
    writeToFile();
    console.log(team);
}

addTeam();

function writeToFile(fileName, team) {
    fs.writeFile('./dist/team.html', generateTeam(JSON.team), (err) => err ? console.error(err) : console.log('Success!'));
}
