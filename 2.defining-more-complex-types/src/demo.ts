type DateType = Date | string | number
type City = "sukkur" | "karachi" | "lahour"


interface MyContract {
    name: string;
    age: number;
    isStuden: boolean;
    dob?: DateType // here | mean it can be either three of this type
}

interface Address {
    street: string,
    city: City,
    country: string
}

type ContractAddress = Address & MyContract
type ContractField = keyof MyContract

let tempContract: MyContract = {
    name: "touqeer",
    age: 26,
    isStuden: false,
    dob: "02,0201995"
}

let tempAddressContract: ContractAddress = {
    name: "touqeer",
    age: 26,
    isStuden: false,
    street: "",
    city: "sukkur",
    country: ""
}

/**
 * 
 * @param source it type contract
 * @param property this will be recevied propety of contract inteface and anly accept the key which are in mycontract interface 
 *      like age ,name other than taht will be error
 * @returns 
 */
// with generic it will be more dynamic 
function getField<T, U extends keyof T>(source: T, property: U) {
    return source[property];
}
// with this way we risticted the to don't passed invalid key to get data from object and waste time to fine issue
getField(tempAddressContract, "age")



function getContractDOB(params: MyContract) {
    if (typeof params.dob === "number") {
        return new Date(params.dob)
    } else if (typeof params.dob === "string") {
        return Date.parse(params.dob);
    } else {
        return params.dob
    }

}

// Typeof


let obj = { min: 1, max: 200 }
function test(data: typeof obj) { // now it parameter will only accept the object tyoe we define earlier

}


//Indexed access types

//here we make parameter type will be dynamic based on objec -> the which property -> value must be type of property
function setField<T, U extends keyof T>(source: T, property: U, value: T[U]) {
    return source[property];
}



//dynameic varibale with limits Record you can add more properties but there typ should be either string or number 
let newobj: Record<string, string | number> = {
    name: "toueeer"
}
newobj.age = 12

interface Query {
    sort?: 'asc' | 'desc',
    matches(vale): boolean
}
type contractQuery = Omit<Partial<Record<keyof MyContract, Query>>,
    "age" | "dob">
type contractQuer2 = Partial<Pick<Record<keyof MyContract, Query>, "age" | "dob">>
type RequiredQuery = Required<contractQuer2>

function SearchForContract(contracts: MyContract[], q: contractQuery) {
    return contracts.filter(contract => {
        for (const property of Object.keys(contract) as (keyof MyContract)[]) {
            let propertyQuery = q[property]
            if (property && propertyQuery.matches(contract[property])) {
                return true
            }
        }
    })
}

// here we are force to define all the propert of my contract to resolve the error 
// but we want test for few of them

let result = SearchForContract([], {
    name: { matches: (name) => name === "touqeer" }
}) 