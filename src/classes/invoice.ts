export class Invoice{

    constructor(public name:string,public details:string,public amount:number){
      this.name=name;
      this.details=details;
      this.amount=amount;
    }
    format(){
     // return this.name + " owes " + this.amount + " for " + this.details;  or
     return `${this.name} owes #${this.amount} for ${this.details}`;
    }
  }