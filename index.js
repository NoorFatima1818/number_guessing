#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 7 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number from 1 to 7 :",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("OOPS! You guessed the wrong number, Try Again...");
}
;
