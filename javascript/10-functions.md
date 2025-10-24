### Function Statement || FUnction Declaration
```
function a(){
    console.log("A Called")
}
```
### Function Expression
```
var b = function(){
    console.log("B Called")
}
```

The difference between Function Statement and Function Expression is Hoisting. If we try to call these function before they are initalized we'll get error on Function expression.

```
a(); // Output -> A Called
b(); // Output -> TypeError: b is not a function

When memory is allocated in memory creation phase, function will stored for a in memory but b will be treated as a variable and get undefined until b line of code is executed.
```

### Named Function Expression
```
var b = function xyz(){
    console.log("Hello World")
}

b(); // Output -> Hello World
xyz(); // Reference Error: xyz is not defined
```

### First Class Functions || First Class Citizen 
The ability to pass function as argument to a function and return a function from a functions.
```
function hello(param1){
    param1();
    return function world(){
        console.log("Hello World")
    }
}

function xyz(){
    console.log("Jai Shree Ram");
}
let b = hello(xyz); // Output -> Jai Shree Ram
b(); // Output -> Hello World

```