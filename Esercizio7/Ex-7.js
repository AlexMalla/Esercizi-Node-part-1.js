// Create a new Node.js project and install the figlet package (https://www.npmjs.com/package/figlet).
// Write a script that uses the function from this package to output some text based art (the figlet package README has a 'Quick Start' section).
// Run the script with Node.js

var figlet = require('figlet');

figlet('Siuuuuum!', function (error, data) {
    if (error) {
        console.log('An error has occurred... No Sium for you');
        console.dir(error);
        return;

    } else {
        console.log(data)
    }
});