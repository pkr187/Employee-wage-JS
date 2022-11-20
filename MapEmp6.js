let keyString='a string';
let keyobj={};
let keyFunc=function(){}
let myMap=new Map();
myMap.set(keystring,"value associated with 'a string'");
myMap.set(keyobj,"value associated with keyobj");
myMap.set(keyFunc,"value associated with keyfunc");
let size=myMap.size;
let iskeyExist=myMap.has('a string');
for (let [key,value] of myMap)
console.log("Loop1: "+key+' = ' +value);
for (let [key,value] of myMap.entries)
console.log("loop2: "+key+' = '+value);
for(let key of myMap.keys())
console.log("Loop3:" +key);
for(let value of myMap.values())
console.log("Loop4: "+value);