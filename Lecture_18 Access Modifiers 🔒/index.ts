// Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:

// private
// protected
// public




class Person {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}


class PipelineTerminal {
    public name: string;
    protected id: number;
    private authcode: number;
    constructor(name: string, id: number, authcode: number) {
        this.name = name;
        this.id = id;
        this.authcode = authcode;
    }
}

class Valve extends PipelineTerminal {
    public valve: string;
    protected valveid: number;
    private valveauthcode: number;
    constructor(id: string, pipename: number, authcode: number, valvename: string, valveid: number, valvecode: number) {
        super(id, pipename, authcode);
        this.valve = valvename;
        this.valveid = valveid;
        this.valveauthcode = valvecode;
    }

    valveDetails = ():void => {
        alert(`Valve area details are: ${this.name} ${this.id} ${this.valveid} ${this.valve} ${this.valveauthcode}`);
    }
}

let valve = new Valve("CRUDE OIL", 777, 444, "TANK-VALVE", 560, 120);
valve.valveDetails();