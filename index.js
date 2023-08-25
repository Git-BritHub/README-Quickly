// packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What would you like to add to your Installation section?"
    },
    {
        type: "input",
        name: "usage",
        message: "What would you like to add to your Usage section?"
    },
    {
        type: "input",
        name: "license",
        message: "Which license would you like to use?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What would you like to add to your contribution section?"
    },
    {
        type: "input",
        name: "tests",
        message: "What would you like to add to your tests section?"
    },
    {
        type: "input",
        name: "questions1",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "questions2",
        message: "What is your email address?",
    },
];

// function to write README file
// function to initialize app
const readMe = () => {
    inquirer.prompt(questions).then((data) => {
        writeFile("README.md", generateMarkdown(data))
    });
};

// Function call to initialize app
readMe();
