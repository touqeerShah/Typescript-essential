let tempContract = {
  name: "touqeer",
  age: 26,
  isStuden: false,
  dob: "02,0201995",
};
let tempAddressContract = {
  name: "touqeer",
  age: 26,
  isStuden: false,
  street: "",
  city: "sukkur",
  country: "",
};
/**
 *
 * @param source it type contract
 * @param property this will be recevied propety of contract inteface and anly accept the key which are in mycontract interface
 *      like age ,name other than taht will be error
 * @returns
 */
// with generic it will be more dynamic
function getField(source, property) {
  return source[property];
}
// with this way we risticted the to don't passed invalid key to get data from object and waste time to fine issue
getField(tempAddressContract, "age");
function getContractDOB(params) {
  if (typeof params.dob === "number") {
    return new Date(params.dob);
  } else if (typeof params.dob === "string") {
    return Date.parse(params.dob);
  } else {
    return params.dob;
  }
}
// Typeof
let obj = { min: 1, max: 200 };
function test(data) {}
//Indexed access types
//here we make parameter type will be dynamic based on objec -> the which property -> value must be type of property
function setField(source, property, value) {
  return source[property];
}
//dynameic varibale with limits Record you can add more properties  but there type should be either string or number
let newobj = {
  name: "toueeer",
};
newobj.age = 12;
