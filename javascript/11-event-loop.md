### Web API's of Browser
1. setTimeout()
2. DOM APIs
3. fetch()
4. localStorage
5. console
6. location and many more

**window** is the global object for Browser.

# Event Loop
1. It continuously monitors the **Call Stack , Microtask Queue and Callback Queue**.
   1. It pushes function from Callback Queue to Call Stack if call stack is empty.

## Callback Queue  
1. It stores functions which need to be executed and pushed to Call Stack when call stack is empty by **Event Loop**. 
2. It is also known as **Task Queue**.
3. **Starvation of Callback Queue**
   1. When tasks inside callback queue don't get executed for a long time because priority is given to Microtask Queue tasks.


   ### Microtask Queue
    1. It is similar to Callback Queue but it has higher priority than Callback Queue.
       1. Functions inside Microtask Queue are executed first then Callback Queue function is executed.
    2. All the callback which comes through Promises and Mutation Observer are put inside Microtask Queue. And rest are put inside the Callback Queue.


### Doubts
1. Does Event Loop only puts functions from Callback queue to Call Stack when it is empty? Yes
2. What is Mutation Observer?
   1. It keeps on checking if there is any mutation in DOM, callback from it are also put in **Microtask Queue** instead of Callback Queue.