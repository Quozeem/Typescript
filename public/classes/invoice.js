export class Invoice {
    constructor(name, details, amount) {
        this.name = name;
        this.details = details;
        this.amount = amount;
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // return this.name + " owes " + this.amount + " for " + this.details;  or
        return `${this.name} owes #${this.amount} for ${this.details}`;
    }
}
