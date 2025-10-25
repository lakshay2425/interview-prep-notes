```
let name = {
    fname: "Hello"
}

let name2 = {
    fname: "World"
}

let printFirstName = function(age){
    console.log(this.fname + age)
}

printFirstName.call(name, 19);  // Call method allow to us to borrow function by passing reference for this and argument to the method separted by comma

printFirstName.apply(name2, [25]);  // Apply method we use array to pass arguments to method

let printMyName = printFirstName.bind(name2, 19) //This returns copy of function which can be invoked later

printMyName();
```

## call vs apply vs bind

call:  Invokes immediately, args comma-separated
apply: Invokes immediately, args as array
bind:  Returns function, invokes later

// When to use which?
call:  When you know args count → fn.call(obj, arg1, arg2)
apply: When args are in array → fn.apply(obj, [arg1, arg2])
bind:  Event handlers, async code → btn.onclick = fn.bind(obj)