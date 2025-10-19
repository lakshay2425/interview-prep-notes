## Hoisting

**Definitions** -> It allows us to access variables and function name even before they are initialized in JavaScript. This phenomena is called Hoisting.

If we create a arrow function, instead of regular function in Javascript, it will allocate undefined to arrow function variable but if we have defined a regular function, the function code will be stored in memory. 

```
getName() //It will give error saying getName isn't a function
getName2() //It will give error saying getName isn't a function
getName3() //It will print "Bye"

var getName = ()=> {
    console.log("Hello)
}

var getName2 = function(){
    console.log("Hi")
}

function getName3 {
    console.log("Byee")
}

```

What happens in this code when it is executed?
1. During the memory execution phase, getName and getName2 will be treated as variable and provided the value as undefined.
   1. But the getName3 will store the function code in the memory and we can access it even before initalization.