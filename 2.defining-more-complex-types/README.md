# 2.defining-more-complex-types

Here we define more complex type, test different combination how to used type more effectivly

- `|` sing is used to define OR methode for type we can define multiple type for one field

```
// this one way to define it but it look not good
let    dob: Date | string | number // here | mean it can be either three of this type

// we can define aliases for it,make more simple to look
type DateType= Date | string | number

```

- `&` we can combine multiple extents type we have two interface
- - one with contract with address
- - other without contract address

```
type ContractAddress = Address & MyContract

```

- `|` we can used this one with alternative of enum because it will take more place the actual work

```
type City = "sukkur" | "karachi" | "lahour"

```

- `keyof` it will allow you to create a varibale with property of any object you refer this compile time mean it will not effect on runtime code like `|` with string

```
type ContractField = keyof MyContract


function getField(source: ContractAddress, property: ContractField) {
    return source[property];
}

getField(tempAddressContract, "age")

```

- `typeof` it is very useful to what type of data is and based on this you will take decision in code and you can define type of parameter based on the input object

```
let obj = { min: 1, max: 200}
function test(data: typeof obj) { // now it parameter will only accept the object tyoe we define earlier

}
```

- `Indexed access types` it will allow you to get type of object index

- `any` is dyanmic one to create type with no limit but is not good way to used it is to avoid this we will used record which help you to creat dynamic type with some limit it have two generic type `Record`
- - first will be parameter name
- - second will be it type

- `Partial` is keyword which help as to used consume few property of interface or class like in our last exmaple of `record` example we face issue to define all the property in query
- - it will take the interface and create copy of it with all optional property
- - what if you want to remove few properties then we used `Omit` on top of `Partial` and tell which properties you want to make remove or omit
- - what if you don't want to make all it properties optional and want to used few of them, then we used `Pick` with `Partial` and tell which properties you want to used

- - what if you want to make few of properties required not Option then we will used `Required`

- `Mapping `is other way to to the `Record` action when you have more complex structure then mapping make it easy
