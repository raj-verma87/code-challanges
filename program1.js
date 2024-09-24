// const http = require('http');
// const express = require('express');
// socketIo = require('socket.io');

// const app = express();
// const server = http.createSocket(app);
// const io = socketIo(server);

// io.on('connection',(socket)=>{
//     socket.on('message',);
// })

var values = "";

function fibonacciSR(n) {
  if (n <= 1) return n;
  return fibonacciSR(n - 1) + fibonacciSR(n - 2);
}

function printFibonacci(n) {
  for (let i = 0; i < n; i++) {
    values += " " + fibonacciSR(i);
  }
}

function isPrime(n){
    for(let i=2;i< n/2;i++){
        if(n % i == 0) return false;
    }
    return true;
}

function reverseLinklist(head){
    let prev = null;
    let current = head;
    while(current != null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

}



printFibonacci(10);
console.log("fiba...", values);

let number=11;
if(isPrime(number))
    console.log(`${number} is a prime number`);
else
    console.log(`${number} is not a prime number`);


    function makeCounter() {
      let count = 0;
      return function() {
      return count++;
      }
     }
     let counter = makeCounter();
    console.log(counter()); // outputs 0
    console.log(counter()); // outputs 1
    console.log(counter()); // outputs 2