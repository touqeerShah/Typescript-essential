# Typescript-essential

This is just for simple code for typescript and it practice code.

### Frist step

Step up env for typescipt

```
npm init
npm install typescript --save-dev -g

tsc  -v
```

creare Typescript configration file on root folder to define global varable

```
// create file by yourself
tsconfig.json
//or type below command

tsc --init
```

Then include following code this mean look for files in src folder.

```
{
 "include": ["src/**/*"]
}

```

to compile code to typescript -> Javascript, it will convert all`*.ts`file to `*.js`

```
tsc
```

We will add compile option in `tsconfig.jso` file which help as to compile file more advance way. Add below lines in files.

- `ES6` is natively support classes and interface to i will compile code more better way
- `"outDir": "build",` will tell where the compile file will store
- `"noEmit": false` if it's ture that mena only check the type check in code and don't convert any file into `*.js`

```
 "compilerOptions": {
        "outDir": "build",
        "target": "ES6"
    },
```

Best thing about typescipt is we can also check ths existing Javascript code type but enable two option in `tsconfig.json` file

```
 "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "outDir": "build",
        "target": "ES6",
        "noEmit": false
    },
```

Now in `app.js` file you will fine the `myContract` when we try to change the type to the previous one it will give you error when you compile it
you can also define the type by docment the code with `industry stander JSDOC` line 1 to 5

`without type`

```
/**
 *
 * @param {*} params  // stric mean any type but you can add type and retict it by update it like given below
 * @returns
 */
```

`with type`

```
/**
 *
 * @param {number} params  // it mean it will only accepte number in parameter you can try with string it give you error
 * @returns
 */
```
