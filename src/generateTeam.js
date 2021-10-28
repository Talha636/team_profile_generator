const employees = require('../index');

const generateTeam = (employees) => {

let cards=``

employees.forEach(employee => {
    if (employee.getRole() === 'Manager') {
        cards+= `
        <div>
        <h1>${employee.name}</h1>
        <h2>${employee.role}</h2>
        </div>
        <div>
        <h3>ID: ${employee.id}</h3>
        <h3>Email: <a href='mailto:${employee.email}'>${employee.email}</a></h3>
        <h3>Office Number: ${employee.getOfficeNumber().officeNumber}</h3>
        </div>
        `
    } else if (employee.getRole() === 'Engineer') {
        cards+= `
        <div>
        <h1>${employee.name}</h1>
        <h2>${employee.role}</h2>
        </div>
        <div>
        <h3>ID: ${employee.id}</h3>
        <h3>Email: <a href='mailto:${employee.email}'>${employee.email}</a></h3>
        <h3>GitHub Username: <a href='https://github.com/${employee.getGithub().github}'>${employee.getGithub().github}</a></h3>
        </div>
        `
    } else {
        cards+= `
        <div>
        <h1>${employee.name}</h1>
        <h2>${employee.role}</h2>
        </div>
        <div>
        <h3>ID: ${employee.id}</h3>
        <h3>Email: <a href='mailto:${employee.email}'>${employee.email}</a></h3>
        <h3>School: ${employee.getSchool().school}</h3>
        </div>
        `
    }

    
});





    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' href='style.css'>
        <title>Project Team</title>
    </head>
    <body>
    <header class='col-12'><h1>My Team</h1></header>
        ${cards}
    </body>
    </html>
    `
}

module.exports = generateTeam;