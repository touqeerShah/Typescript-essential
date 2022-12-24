import { dateFormate } from "./utils";
let date = dateFormate(new Date);
console.log(date);


interface Customer {
    /** here we extand the or merging new function in existing class */
    save(): void
}

class Customer {
    constructor() {

    }
}

const customer = new Customer()
customer.save = function () { }


console.log(window.MY_VAL);
