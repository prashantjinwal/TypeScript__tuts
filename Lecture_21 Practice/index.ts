class BankBalance{
    private _balance:number = 0;

    public get balance():number{
        return this._balance
    }

    public set balance(newBalance:number){
        if(newBalance < 0){
            throw new Error("Invaild Balance");
        }
        this._balance = newBalance;
    }
    
}

const acc = new BankBalance();
acc.balance = 20;
console.log(acc.balance);