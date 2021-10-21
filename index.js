const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/generateTeam');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const questions = [
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
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'Choose the employee position.',
        choices: ['Manager', 'Engineer', 'Intern'],
    }
];

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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
}

function employeeQuestions() {
    inquirer.prompt(questions).then((answers) => {
        if (answers.employeeRole === 'Manager') {
            inquirer.prompt(managerQuestion).then((managerAnswer) => {
                console.log(answers, managerAnswer);
                inquirer.prompt(addAnotherEmployee).then((response) => {
                    if (response.anotherEmployee === true) {
                       employeeQuestions(); 
                    } else {
                        return;
                    }
                })
            })
        } else if (answers.employeeRole === 'Engineer') {
            inquirer.prompt(engineerQuestion).then((engineerAnswer) => {
                console.log(answers, engineerAnswer);
                inquirer.prompt(addAnotherEmployee).then((response) => {
                    if (response.anotherEmployee === true) {
                       employeeQuestions(); 
                    } else {
                        return;
                    }
                })
            })
        } else {
            inquirer.prompt(internQuestion).then((internAnswer) => {
                console.log(answers, internAnswer);
                inquirer.prompt(addAnotherEmployee).then((response) => {
                    if (response.anotherEmployee === true) {
                       employeeQuestions(); 
                    } else {
                        return;
                    }
                })
            })
        }
        console.log(answers);
        writeToFile('team.html', generateTeam(answers, managerAnswer, engineerAnswer, internAnswer));
    })
}

employeeQuestions();