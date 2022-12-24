
function authcate(role: string) {

    return function authcateFactory(target: any, property: string, descriptor: PropertyDescriptor) {
        let warrap = descriptor.value// here we store the current logic of the function
        descriptor.value = () => { // here add extra check on the code
            // here we define the condition

            warrap.apply(this, arguments) // after check it we will return the original methode logic to execut
        }
    }
}
function freeze(constructor: Function) {
    Object.freeze(constructor)
}
function singleton<T extends { new(...args: any[]): {} }>(constructor: T) { // to avoid the any we will used generic type for it
    return class Singleton extends constructor {//constructor will be any class defination
        static _instance = null
        constructor(...args) { // becasue the argument of this funtion is any so it will be any call and we did't not the parameter of it
            super(...args);
            if (Singleton._instance) {
                throw new Error("Alread exist object");

            }
            Singleton._instance = this
        }
    }
}
function log(target: object, key: string | symbol) {
    let values = target[key]

    Object.defineProperty(target, key, {
        get: () => values,
        set: (newValue) => {
            console.log(newValue);
            values = newValue
        }, enumerable: true, configurable: true
    })
}
@freeze
@singleton
class Test {
    @log // it will execut when ever this value will change
    public name: string = "touqeer"
    @authcate("testrole")
    login(user: string) { }
}