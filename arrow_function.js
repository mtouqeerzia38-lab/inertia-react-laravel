const a = 'hello';
const b = 'touqeer';

const concate = (a , b) => {
    return a + b;
}
const result = concate(10 , 15)
document.getElementById('demo').innerHTML = result;
 
const demo1 = (name) => {
    document.getElementById('demo1').innerHTML = name;
}

console.log = demo1('ahmad');