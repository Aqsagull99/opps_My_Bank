class BankAccount {
    private accountNumber: string;
    private balance: number;
  
    constructor(accountNumber: string, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }
  
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
      } else {
        console.log("Invalid withdraw amount.");
      }
    }
  
    checkBalance(): void {
      console.log(`Current Balance: ${this.balance}`);
    }
  
    getAccountNumber(): string {
      return this.accountNumber;
    }
  }
  
  export default BankAccount;
  