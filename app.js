const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


inquirer
  .prompt([
    {
      type: 'password',
      name: 'name',
      message: 'What is your password?'
    }
  ])
  .then(answers => console.log(answers));