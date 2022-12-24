interface MyContract extends Address {
    name: string;
    age: number;
    isStuden: boolean;
    dob?: Date // here ? mean optional it not mandatory 
}

interface Address {
    street: string,
    city: string,
    country: string
}
let tempContract: MyContract = {
    name: "touqeer",
    age: 26,
    isStuden: false,
    street: "",
    city: "",
    country: ""
}

type myString = string

let title: myString = " Testing"

enum ContractStatus {
    Active = "active", Deactived = "deactived"
}
let _status: ContractStatus;
_status = ContractStatus.Active
console.log(_status);


function getContract(params: MyContract): MyContract {
    return params
}


//generic example
function getContract1<T>(params: T): T {
    return params
}

getContract1(tempContract)

getContract1({
    name: "touqeer",
    age: 26
})
