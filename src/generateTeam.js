const employees = require('../index');

const generateTeam = (employees) => {
    return `
    ${JSON.stringify(employees, null, 2)}
    `
}

module.exports = generateTeam;