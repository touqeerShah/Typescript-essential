# 2.creating-custom-types-with-interfaces

Here we create simple Interface or custom type in our project.

- we can create small sub interface and extend them or used them individually just like in `address` interface
- `aliases` it used to assign name to any type link just like below code it type string we just assign alieses to just for our easies and add more values.

```

type myString = string

let title: myString = " Testing"
```

- one more powerful concept is `enumerable` which help as to define some values which are fequently used in our systme and we want user to add values in given option we will define `enum` like account status field will be either `active` and `deactived` so we can't define type string otherwise user will entry way data into it so we define type enum

```
enum ContractStatus {
    Active = "active", Deactived = "deactived"
}
let _status: ContractStatus;
_status = ContractStatus.Active
```

- `function` are also very important in javascript so we can also define typescript in like on it parameter and return type (default it will be any mean what ever you return it will be it type ), as we as function as argument we can also define function defination in parameters

```
function getContract(params: MyContract): MyContract {
    return params
}
```

- `Generic` Type is simple metatype it will represent any other type which you want to subsitude in future for example we have one function which will used by many other class but different object type by we have to make it type bound we did make it `any` otherwise it will accepte string,number boolena as well, to solve this issue we user `Generic` define type before call the funtion
