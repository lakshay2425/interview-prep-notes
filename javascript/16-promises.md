# Promises
1. Promises are used to execute asynchronous activities in JS.
   1. Definition -> **Promise is an object representing eventual completion or failure of an asynchronous operation.**
2. It can have only three states
   1. **Pending**
   2. **Fulfilled**
   3. **Rejected**
3. Promises object is **immutable**.
4. 

## Promise Chainig
```
createOrder(cart)
.then(cartData => proceedToPayment(cartData))
.then(paymentInfo => paymentSummary(paymentInfo))
.then(paymentInfo => updateBalance(paymentInfo))
```

## Why Promises Over Callbacks?

### 1. Inversion of Control
**Callback:**
- You pass your function to external code
- External code decides when/if to execute it
- No guarantee of execution (once, twice, never?)

**Promise:**
- External code returns promise object to you
- YOU decide when to attach handlers (.then)
- Immutability guarantees execution once

### 2. Error Handling
**Callback:** Error handling scattered across nested callbacks

**Promise:** Centralized error handling with .catch()

### 3. Readability
**Callback:** Pyramid of doom (nested callbacks)

**Promise:** Flat chain (linear flow)

### Creating a Promise

```
function createOrder(cart){
    return new Promise((resolve, reject)=>{
        resolve("orderId")
    })
}

function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve("Payment Successfully)
    })
}

function showOrderSummary(){
    return new Promise((resolve, reject)=>{
        resolve("Order placed successfully")
    })
}

function updateWallet(){
    return new Promise((resolve,reject)=>{
        resolve("Balance Updated Successfully")
    })
}

createOrder(cart)
.then((orderId)=>{
    console.log(orderId)
    return proceedToPayment(order)
})
.then((info)=>{
    console.log(info)
    return showOrderSummary()
})
.then(()=>{
    return updateWallet()
})
.catch((err)=>{
    console.log(err.message)
})
.then(()=>{
    console.log("Done")
})
```


### Promises APIs (All take array of Promises as argument)
1. Promise.all
   1. It wait for all promises to complete before giving the output in the form of array.
   2. If any of the promises fails, it will throw error and it will not wait for other promises to settle.
      1. To settle this problem, we have **Promise.allSettled**. 
         1. It waits for all promises to settle even one gives error or rejected and return their response (irrespective of success or failure)
2. Promise.race
   1. It gives the value of first settled promise.
3. Promise.any
   1. It is similar to Promise.race but it waits for first promise to be fulfilled and return its response.
   2. If all of the promises fail, it will return **aggregated error** of all three promises.
