var num = 9;
var arr = [4,4,5,12];
var res = arr.reduce(producto,num);

function producto(anterior,actual){
    return  anterior *  actual;
}

console.log( producto(2,3));
console.log(res);

//ejercicio 2

var array = [784123123,355676784,3423543554];
var array2 = [784];
var res = array.filter(numValido);
console.log(res);
function numValido(num){
  var los3primeros = num.toString().substr(0,3);
  var los3ultimos = num.toString().substr(-3);
  if(los3primeros == array2[0] || los3ultimos == array2[0]){
    return true;
  }else{
    return false;
  }
}

// ejercicio numero 3
var numero = [7,21,44,80,77,35];
var x = 7;
var arreglo = [];
var resultado = numero.forEach(multiplo);
function multiplo(numero){
  if(numero % x == 0){
    arreglo.push(numero);
  }
}
console.log(arreglo);

// ejercicio numero 4

var arreglo = [2,5,7,2,3,8,10];
var res = arreglo.map(doble);

function doble(num){
 return num * 2 + 1;
}
console.log(res);

// ejercicio numero 5

var arreglo = [0,100,50];
var res = arreglo.map(celcious);

function celcious(c){
  var f = 32 + (1.8 * c);
  return f;
}
console.log(res);

// ejercicio numero 6

var arreglo = [1,2,3,4];
var resultado = arreglo.reduce(producto);
function producto(anterior, actual){
  return anterior * actual;
}
console.log(resultado);

// ejercicio 7

var arreglo =[20,16,89,26];
var resultado = arreglo.filter(nacimiento).map(mayorEdad);

function mayorEdad(n) {
  // console.log(n);
  return 2017-n;
}

function nacimiento(edad){
  // console.log(edad);
  if(edad % 2 == 0 && edad > 18){
    return true;
  } else
    return false;
}
console.log(resultado);
