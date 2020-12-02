let a = "a"; // B
let b = "b"; // C
let c = "c"; // A



let aux = a;

a = b
b = c;
c = aux;



console.log(a, b, c);