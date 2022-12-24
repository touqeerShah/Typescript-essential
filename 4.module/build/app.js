"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
let date = (0, utils_1.dateFormate)(new Date);
console.log(date);
class Customer {
    constructor() {
    }
}
const customer = new Customer();
customer.save = function () { };
// console.log(window.MY_VAL);
