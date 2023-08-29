import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter First Number",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Second Number"
    },
    {
        name: "operations",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "Enter operation:"
    }
]);
console.log(answer);
if (answer.operations === "addition") {
    console.log(`The sum of two numbers = ${answer.num1 + answer.num2}`);
}
else if (answer.operations === "subtraction") {
    console.log(`The difference of two numbers = ${answer.num1 - answer.num2}`);
}
else if (answer.operations === "multiplication") {
    console.log(`The multipication of two numbers = ${answer.num1 * answer.num2}`);
}
else if (answer.operations === "division") {
    console.log(`The division of two numbers = ${answer.num1 / answer.num2}`);
}
