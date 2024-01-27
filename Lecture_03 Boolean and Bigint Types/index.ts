// -------------- use of boolen type annotation ----------------

let isDone:boolean = true;
let hasStarted:boolean = false;
let isMyNamePrashant = true;

    hasStarted = true;
// hasStarted = "yes";      // valid in js but not valid in ts


    // Q -- 1

    function isEven(a:number):boolean{
        return a % 2 === 0;

    }

    console.log(isEven(7));

    // Q -- 2

    function IsDivisibleBy4and8 (x:number):boolean{
        return x % 4 === 0 && x % 8 === 0 ;
    }
    console.log(IsDivisibleBy4and8(16));



    // -------------- use of BigInt type annotation -------------- 


    let maxNumber = (Number as any).MAX_SAFE_INTEGER;

    let BigNumber:bigint = 90071992547409n;
    console.log(BigNumber);
    let anotherNumber:bigint = 9845988458975n;

    let sum:bigint = BigNumber + anotherNumber;
    console.log(sum);

    let diff:bigint = BigNumber - anotherNumber;
    console.log(diff);

    let product:bigint = BigNumber * anotherNumber;
    console.log(product);

    let division:bigint = BigNumber / anotherNumber
    console.log(division)


// use tsc --path  command to transpile into a js code