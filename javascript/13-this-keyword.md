# This Keyword
Every execution context has its own **this keyword** in it.

```
console.log(this); // Output -> Global Object (Window for Browsers)

function log(){
    console.log(this); // Output -> Global Object (Window for Browsers) || Output -> undefined (If we're using strict mode)
}

const user = {
    fname: "Hello World",
    print: function(){
        console.log(this); // Output -> user Object
    },
    print2: ()=>{
        console.log(this) // Output -> Global Object (Window for Browsers)
    }
}
```

1. The value of this depends on how we call the function.
2. The value of this keyword depends on strict and non-strict mode.
3. When we call a function without any reference, the value of this keyword will be undefined. But if we call it with a reference, the value of this keyword will be that reference. 
4. **This Subsitution**
   1. It only happens in **non-strict mode**.
   2. If the value of this keyword is undefined or null, it will be replaced with globalObject only in non-strict mode 
5. Arrow function execution context doesn't have its own this keyword. It takes from it lexical environment.


```
<button onClick="alert(this)">Click</button> // Value of this will be button HTML element
```