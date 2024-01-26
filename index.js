const inquirer = require('inquirer')
const fs = require('fs').promises


const questions = [{
    message: "What would you like to call your new icon?",
    name: "name"
},
{
    message: "Please enter up to 3 characters for your Icon:",
    name: "text"
},
{
    message: "What color would you like your text? Hexadecimals work as well:",
    name: "textColor"
},
{
    type: "list",
    message: "What shape would you like for your icon?",
    choices: ["Circle", "Square", "Triangle"],
    name: "shape"
},
{
    message: "What color would you like your shape? Hexadecimals work as well:",
    name: "shapeColor"
}]

const userInput = () => {
    return inquirer.prompt(questions)
}

const generateIcon = async () => {
    await userInput()
        .then((responses) => {
            switch (responses.shape) {
                case "Circle":
                    fs.writeFile(`Icons/${responses.name}.svg`,
                        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${responses.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
            </svg>`)
                    break;

                case "Square":
                    fs.writeFile(`Icons/${responses.name}.svg`,
                        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="10" width="200" height="200" fill="${responses.shapeColor}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
                </svg>`)

                    break;

                case "Triangle":
                    fs.writeFile(`Icons/${responses.name}.svg`,
                        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="10,190 150,10 290,190" fill="${responses.shapeColor}" />
                  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
                </svg>`);
                    break;
            }
        })
}

generateIcon();