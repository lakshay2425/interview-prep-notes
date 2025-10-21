1. Yes, **let and const declaration are hoisted**.
   1. They are hoisted very differently than **var declarations**.

```
console.log(b) // It will print undefined without giving us any error
console.log(a) // Error -> We cannot access them before they are being initialization

let a= 20;
var b = 5;
```

### Key Difference between let, const and var Hoisting
2. We can access **variables** declared with **var** even before they are initalized because they are added to the Global object. 
    1. But the variables declared with the let and const cannot be accessed before initalization because of the following reason
       1. They are stored in separate memory space (not accessible via window),
       2. They're added to different memory space (script), not global memory space.
 3. We can initalize same variable with different value using **var** but it isn't possible with **let and const**.



# Temporal Dead Zone

1. It refers to the time period between memory allocation to **let and const variables** and value initalization to them.
   1. When we try to access these variable during **Temporal Dead Zone**, we will get the **Reference Error** (We cannot access them before initalization)
