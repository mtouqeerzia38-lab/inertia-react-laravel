console.log("hello world");

let a = 10;
let b = 20;
let sum = a+b;

const studentMarks = [98 , 89 , 56 , 99 , "absent"];
const slen = studentMarks.length;
console.log("sum is"+sum);

document.getElementById('demo').innerHTML= sum;

document.getElementById('demo1').innerHTML = studentMarks;

function add(){
    studentMarks.push(50);
    document.getElementById('demo1').innerHTML = studentMarks;
}

function add(){

    document.getElementById('demo1').innerHTML = typeof studentMarks;
}