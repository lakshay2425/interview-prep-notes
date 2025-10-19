## Window and This Keyword

Window refers to the **global object** which is added by the Javascript engine and we can access it methods anywhere in the code. 

At the global level, this keyword refers to the **window object**. 

When the memory is executed in the phase 1 of code execution, JS engine creates window object and this along with global context.  **(Window is browser-specific)**

All the variables, function we create in global scope is added to the window object. 

```
var x = 10; // Global Scope
function sayHello(){ //Global Scope
    console.log("Hello");
    var a = 12; //Local Scope
}

console.log(x); //It will print 10
//But if we try to print a, it will give us not defined error
console.log(a);
```