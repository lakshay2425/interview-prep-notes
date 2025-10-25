# JavaScript Runtime Environment
It contains everything to run JS code.

## COmponents of JS Runtime Environment
1. **JS Engine**
2. **Set API's**
3. **Event Loop**
4. **Callback Queue**
5. **Micro Task Queue**

## JavaScript Engine Architecture
1. JS Engine is not a machine
2. It takes human readable code we write as input and performs three steps
   1. Parsing (It generates AST)
   2. Compilation
   3. Exectuion



3. Concurrency Model in JS

### Compliation
1. JS is both compiled and interpretered language. It depends on JS engine.
2. It also has Just in time Compilation which makes code more efficient when executing. 

### Execution
1. It is possible due to **Memory Heap and Call Stack**
2. Memory Heap is continuously in sync with **Call Stack**, **Garbage Collector** and lot of other things.

#### Garbage Collector
1. It uses **Mark and Sweep Algorithms** to clean the memory.
2. Google V8 Engine is the fatstest JS Engine.   