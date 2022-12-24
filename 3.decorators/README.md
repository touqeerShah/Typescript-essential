# 3.decorators

it allow to make code more simpliy and readable it just like metadata which allow you to add extra properties to you existing code.
like logs or authentication which you know you used frequently

To used this you need to update your `tsconfig.json` file

```
        "experimentalDecorators": true
       ,"emitDecoratorMetadata": true
```

Also add following library into your module

```
npm i reflect-metadata --save
```

- first we will create meth`ode decorators
- - to pass values to the `function` decorators we need to create `decoratorsfactory` on top of our decorators so we can recevied extra parmeter
- decorators for `class` it allow to access construtor to and mofify or get the call and extent it code and return total new class
- property decorators
