import inquirer from 'inquirer';
import chalk from 'chalk';
import BankAccount from './first.js';
const accounts = [];
function createAccount() {
    inquirer.prompt([
        {
            name: 'accountNumber',
            message: 'Enter account number:'
        },
        {
            name: 'initialBalance',
            message: 'Enter initial balance:',
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number'
        }
    ]).then((answers) => {
        const account = new BankAccount(answers.accountNumber, parseFloat(answers.initialBalance));
        accounts.push(account);
        console.log(chalk.green('Account created successfully!'));
        mainMenu();
    });
}
function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: ['Create Account', 'Deposit', 'Withdraw', 'Check Balance', 'Exit']
        }
    ]).then((answer) => {
        switch (answer.action) {
            case 'Create Account':
                createAccount();
                break;
            case 'Deposit':
                deposit();
                break;
            case 'Withdraw':
                withdraw();
                break;
            case 'Check Balance':
                checkBalance();
                break;
            case 'Exit':
                console.log(chalk.blue('Goodbye!'));
                break;
        }
    });
}
function deposit() {
    inquirer.prompt([
        {
            name: 'accountNumber',
            message: 'Enter account number:'
        },
        {
            name: 'amount',
            message: 'Enter deposit amount:',
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number'
        }
    ]).then((answers) => {
        const account = accounts.find(acc => acc.getAccountNumber() === answers.accountNumber);
        if (account) {
            account.deposit(parseFloat(answers.amount));
        }
        else {
            console.log(chalk.red('Account not found!'));
        }
        mainMenu();
    });
}
function withdraw() {
    inquirer.prompt([
        {
            name: 'accountNumber',
            message: 'Enter account number:'
        },
        {
            name: 'amount',
            message: 'Enter withdraw amount:',
            validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number'
        }
    ]).then((answers) => {
        const account = accounts.find(acc => acc.getAccountNumber() === answers.accountNumber);
        if (account) {
            account.withdraw(parseFloat(answers.amount));
        }
        else {
            console.log(chalk.red('Account not found!'));
        }
        mainMenu();
    });
}
function checkBalance() {
    inquirer.prompt([
        {
            name: 'accountNumber',
            message: 'Enter account number:'
        }
    ]).then((answers) => {
        const account = accounts.find(acc => acc.getAccountNumber() === answers.accountNumber);
        if (account) {
            account.checkBalance();
        }
        else {
            console.log(chalk.red('Account not found!'));
        }
        mainMenu();
    });
}
mainMenu();
