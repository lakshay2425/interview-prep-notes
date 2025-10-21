1. **Block** is also known as **Compound Statements**
   
```
const age = 15;
let allowed;
if(age> 18){  //This expect a statement but using block we can write multiple statements combined using block
    console.log("Allowed");
    allowed = true
}else{
    console.log("Not Allowed");
    allowed = false
}
```

```
let b =100; // Script Scope
{
    var a = 20; // Global Scope
    let b = 20; // Block Scope
    const c = 30; // Block Scope
    console.log(b); // It will print 20, not 100 because of Shadowing
    console.log(c); // It will print 30
}
console.log(b);
```