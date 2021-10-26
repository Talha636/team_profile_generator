const employees = require('../index');

const generateTeam = (employees) => {
    return `
    ${employees}
    `
}

module.exports = generateTeam;