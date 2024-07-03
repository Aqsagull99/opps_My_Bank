class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        }
        else {
            console.log("Invalid deposit amount.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
        }
        else {
            console.log("Invalid withdraw amount.");
        }
    }
    checkBalance() {
        console.log(`Current Balance: ${this.balance}`);
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
export default BankAccount;
