let tempContract = {
  name: "touqeer",
  age: 26,
  isStuden: false,
  street: "",
  city: "",
  country: "",
};
let title = " Testing";
var ContractStatus;
(function (ContractStatus) {
  ContractStatus["Active"] = "active";
  ContractStatus["Deactived"] = "deactived";
})(ContractStatus || (ContractStatus = {}));
let _status;
_status = ContractStatus.Active;
console.log(_status);
function getContract(params) {
  return params;
}
//generic example
function getContract1(params) {
  return params;
}
getContract1(tempContract);
getContract1({
  name: "touqeer",
  age: 26,
});
