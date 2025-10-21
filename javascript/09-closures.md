# Closures
Definitions: Functions along with lexical scope forms a **Closure**.

```
function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    return y;
}

let z = x(); //This will return y function and it's lexical scope forming closure
z(); // It will print 10;
```



```
Code 1
for (var i = 1; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
} 

Output -> 6 6 6 6 6 

Code 2
for (let i = 1; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

Output -> 1 2 3 4 5 

```

Let's understand why both behave differently.

In the Code 1, we're using var to declare the i and variables declared using var are stored in global memory and shared across all iteration of the loop.

Secondly, JavaScript doesn't wait for setTimeOut to execute, it is put inside the queue after each iteration of loop and execute the code synchronously.

When time outs, i has been increased to 6 and because it is shared among all iterations, it will print 6 (5 times).

<hr>

Whereas in the code 2, we're using let to declare the i and variables declared using let are block scope and on each iteration they create separte block scope memory and prints 1,2,3,4,5. 

The difference is between how values are stored fundamentally using var and let.

How to fix the var version
- Use an IIFE to capture the current value into a new function-scoped variable:

```
// Example fix: capture value with IIFE
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, j * 1000);
  })(i);
}
// prints 1 2 3 4 5
```

The key points: closures capture bindings (references), and let in a for-loop creates fresh bindings per iteration, which is why the outputs differ.


