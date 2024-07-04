#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  {
    message: chalk.magenta("Enter First Number: "),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.magenta("Enter Second Number: "),
    type: "number",
    name: "secondNumber",
  },
  {
    message: chalk.cyan("Select one of the Operators to perform an Operation"),
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulo",
    ],
  },
]);

// Conditional Statements

if (answer.operator === "Addition") {
  console.log(
    chalk.bgBlue(`Your value is: ${answer.firstNumber + answer.secondNumber}`)
  );
} else if (answer.operator === "Subtraction") {
  console.log(
    chalk.bgBlue(`Your value is: ${answer.firstNumber - answer.secondNumber}`)
  );
} else if (answer.operator === "Multiplication") {
  console.log(
    chalk.bgBlue(`Your value is: ${answer.firstNumber * answer.secondNumber}`)
  );
} else if (answer.operator === "Division") {
  console.log(
    chalk.bgBlue(`Your value is: ${answer.firstNumber / answer.secondNumber}`)
  );
} else if (answer.operator === "Modulo") {
  console.log(
    chalk.bgBlue(`Your value is: ${answer.firstNumber % answer.secondNumber}`)
  );
} else "Please Select a valid Operator!";

console.log(chalk.yellow("***Thanks for using my Calculator!***"));
