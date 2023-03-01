function createAccount(pin, amount = 0) {
  return {
    invalid: "Invalid PIN.",
    checkBalance(input) {
      if (input !== pin) return this.invalid;
      return `$${amount}`;
    },
    deposit(input, money) {
      if (input !== pin) return this.invalid;
      amount += money;
      return `Succesfully deposited $${money}. Current balance: $${amount}.`;
    },
    withdraw(input, money) {
      if (input !== pin) return this.invalid;
      if (amount - money >= 0) {
        amount -= money;
        return `Succesfully withdrew $${money}. Current balance: $${amount}.`;
      } else
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
    },
    changePin(input, newPin) {
      if (input !== pin) return this.invalid;
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
