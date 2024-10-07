/*function func() {
    try {
        console.log(1)
        return
    } catch (e) {
        console.log(2)
    } finally {
        console.log(3)
    }
    console.log(4)
}
func();

getData1()
//getData(); if you will call here , throw error
function getData1() {
    console.log("getData11")
}
var getData = () => {
    console.log("Hello")
}
getData();

function x() {
    let a = 10;
    function d() {
        console.log(a);
    }
    a = 500;
    return d;
}
var z = x();
z();




const timer1 = setTimeout(() => {
    console.log('timer1');
    const promisel = Promise.resolve().then(() => {
        console.log('promise1')
    })
}, 0)
const timer2 = setTimeout(() => {
    console.log('timer2')
}, 0)
*/
/**
 *Detailed Explanation:
Synchronous Code: The main body of JavaScript code runs synchronously. The console.log() statements outside of promises and then blocks are executed in the order they appear.

Promises: When a promise is created, the code inside the Promise constructor (console.log(1) in this case) runs synchronously. However, the .then() block runs asynchronously, after the synchronous code has finished.

Event Loop and Microtasks: The promise resolution (resolve('success')) doesn't immediately execute the .then() callback. Instead, it's added to the microtask queue, and that queue is processed only after the current synchronous code has finished running.

This is why 'success' is printed last, even though the promise was resolved in the middle of the code execution.
 */
/*
console.log('start');

const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
}));

console.log('middle');

fn().then(res => {
    console.log(res);
});

console.log('end');





/**
 *Key Points:
The first .then() does nothing but passes the resolved value 'JS' to the next .then().
The second .then() contains console.log, which is called with the value 'JS', so 'JS' is printed.
 */
//new Promise((resolve) => resolve('JS')).then().then().then(console.log);


/**
 * Key Points:
Only the first resolve or reject call affects the promise. Once a promise is settled, additional calls to resolve or reject are ignored.
Regular synchronous code (like console.log("After resolve/reject")) is executed even after resolve or reject.
The .then() block is triggered when the promise is resolved, and .catch() is triggered when the promise is rejected. Since the promise was resolved, only the .then() block executes.
 */
/*
function processing() {
    return new Promise((resolve, reject) => {
        resolve(1);
        reject("Failed");
        resolve(2);
        console.log("After resolve/reject");
    });
}
function init() {
    processing()
        .then((v) => console.log(v + 1))
        .catch((err) => console.log(err));
}
init();
*/
// improve the below codes
/*function init() {
    let channel = 'YouTube';
    function greet(name) {
        console.log('hey ${name}');
        console.log('from ${channel}');
    }
    setTimeout(() => {
        greet("FrontendMaster")
    }, 1000);
}
init(); */

console.log("=============================>");

// improved version of codes
function init() {
    let channel = 'YouTube';
    function greet(name,ch) {
        console.log(`hey ${name}`);
        console.log(`from ${ch}`);
    }
    setTimeout(greet, 1000,"FrontendMaster",channel);
}
init();

