#! /usr/bin/env node 
import inquirer from "inquirer";
let currencyValue = {
    PKR: 278.36,
    UAE: 3.67,
    SAR: 3.75,
    USD: 1,
    AUD: 1.54,
    EURO: 0.93
};
let ans = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "converting from",
        choices: ["PKR", "UAE", "SAR", "USD", "AUD", "EURO"],
    },
    {
        type: "list",
        name: "to",
        message: "converting to",
        choices: ["PKR", "UAE", "SAR", "USD", "AUD", "EURO"],
    },
    {
        type: "number",
        name: "amount",
        message: "your amount to convert",
    },
]);
console.log(currencyValue[ans.to] / currencyValue[ans.from] * ans.amount);
