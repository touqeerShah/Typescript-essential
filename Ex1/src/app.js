/**
 *
 * @param {number} params
 * @returns
 */

async function myContract(params) {
  return {
    id: 1,
    name: "touqeer",
    dateOfBirth: new Date("01,02,1995"),
  };
}
myContract(1).then((data) => {
  console.log(" id = ", data.id, "\nname =", data.name);
  data.id = "check";
  data.name = 12;
});
