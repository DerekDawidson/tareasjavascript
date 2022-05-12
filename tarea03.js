// 01
/**
 * Mostrar en consola los números del 100 al 0 utilizando la estructura while, for y do while
 */

let a = 100;
console.log(a)
while(a > 0) a--;
console.log(a)

for(let b = 100; b > 0; b--) console.log(b);

let c = 100;
console.log(c);
do {
  c++;
  console.log(c)
} while (c > 0);

//
 // 02
/**
  * Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while, for y do while
  */ 

let d = 0;
console.log(d)
while(d < 1000) d + 2;
console.log(d)

for(let d = 0; d < 1000; d + 2) console.log(d);

let e = 0;
console.log(e);
do {
  e + 2;
  console.log(e)
} while (e < 1000);

// 03
/**
 * Mostrar en consola la suma parcial de todos los números 
 * que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

let f = 0;
let g = 0;
console.log(g)
while (f < 1000) {
  f++;
  g += f;
  console.log(g);
}

let h = 0;
for (let i = 0; i <= 1000; i++) {
h += i;
console.log(h);
}

let j = 0;
console.log(j);
do {
  let k = 0;
  j++;
  k += j
  console.log(k)
} while (j < 1000);

// 04
/**
 * Mostrar en consola la suma parcial de todos los 
 * números impares que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

let l = 1;
let m = 1;
console.log(m)
while (l < 1000) {
  l += 2;
  m += l;
  console.log(m);
}

let n = 1;
for (let o = 1; o <= 1000; o += 2) {
n += o;
console.log(n);
}

let p = 1;
console.log(p);
do {
  let q = 1;
  q += 2;
  p += q;
  console.log(p);
} while (q < 1000);

// 05
/**
 * Mostrar en consola el siguiente dibujo utilizando la estructura while, for y do while
 */
/* 
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
*/

// 06
/**
 * Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000 usando for
 */

// 07
/**
 * Mostrar en consola los números desde el 1000 hasta el 0
 * Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**

ejemplo
**1000**
999
998
997
996
995
994
993
992
991
**990**
989
988
987
986
985
984
983
982
981
**980**
979
...
**0**

 */

//ARRAYS


/**
 *  Crear un programa que pida ingresar nombres separados por espacios y
 * devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:}
 * 
 * Ingrese nombres: Ada Greta Grace
 * ¡Hola Ada!
 * ¡Hola Greta!
 * ¡Hola Grace!
 * */

let names = [];
names.push(prompt(`Ingrese su nombre`))
do { 
  for (let i = 0; i < names.length; i++) {
  alert("¡Hola " + names[i] + "!");
  }
} while (names.length < 10)

//02
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
 * 
 * Ingrese números: 5 7 99 34 54 2 12
 * El menor número es: 2
 */

let listaDeNumeros1 = prompt(`Ingrese la cantidad de números que desee, separados por un espacio`);
let arrayDeNumeros1 = listaDeNumeros1.split (' ');
arrayDeNumeros1.sort();
alert(`El menor número es ${arrayDeNumeros1[0]}`)
console.log(arrayDeNumeros1)

 // 03
/**
  * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:
  * Ingrese números: 5 7 10 12 24
  * La suma de todos los números es: 58
  */

  let listaDeNumeros2 = prompt(`Ingrese la cantidad de números que desee, separados por un espacio`);
  let arrayDeNumeros2 = listaDeNumeros2.split (' ');
  for (let i = 0; i < listaDeNumeros2.length; i++) {
    let resultado = resultado + listaDeNumeros2[i];
  }

  // 04
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:
 * Ingrese valores: 5 7 99 34 54 2 12
 * Ingrese valor a buscar: 54
 * El valor 54 se encuentra entre los valores originales
 */

// 05
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:
 * Ingrese valores: 5 7 12 34 54 2 12
 * Ingrese valor a buscar: 12
 * El valor 12 se encuentra en el índice 12
 */

 // 06
 /**
  * Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:
  * Ingresar nombres: Sam Frodo Legolas
  * Sam y Frodo están juntos, ¡Frodo está a salvo!
  * Ingresar nombres: Sam Orco Frodo
  * Sam y Frodo están separados, ¡Frodo está en peligro!
  */

// 07
/**
 * Crear un programa que pida ingresar "manzana", "pera"y "durazno" y devuelva un mensaje 
 * con la cantidad que hay de cada una. Ejemplo:
 * Ingrese frutas: manzana manzana pera durazno pera durazno manzana
 * Hay 3 🍎, 2 🍐 y 2 🍑
 */

 // 08
 /**
  * Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:
  * Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
  * Cuántas bananas come un mono?: 2
  * ¡Oh no!¡No hay suficientes bananas para los monos! 😭
  */

 // 09
 /**
  * Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:
  * Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
  * Resultado: 🐶🐶🐶🐶🐱🐱🐱
  */

 // 10
 /**
  * Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:
  * 
  * Para una usuaria, debe mostrar: nombre usuaria + está conectada
  *
  * Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
  *
  * Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas
  *
  * Ejemplo:
  *
  * Ingrese nombres de usuarias: Ada
  * Ada está conectada
  *
  * Ingrese nombres de usuarias: Ada Grace
  * Ada y Grace están conectadas
  *
  * Ingrese nombres de usuarias: Ada Grace Marie
  * Ada, Grace y 1 persona(s) más están conectadas
  */
