// 01
/*****************************************************************
 * Completar las condiciones
 */
if(1 !== 2) console.log("Debe entrar");

if(2 !== 2) console.log("NO debe entrar");

if(1 >= 1) console.log("Debe entrar");

if(1 !== 2 && 5 <= 5) console.log("Debe entrar");

// 02
/*************************************************************************
 * Pedir dos prompts, deben ser largoPelo y barba.
 * Jacer una funcion que reciban esos valores por parametro
 * Largo pelo pueden ser dos valores, "largo" o "corto". 
 * Barba puede ser "si" o "no".
 * Hacer if-elseif-else para ofrecer corte de pelo si el pelo es largo, y afeitada si
 * barba es "si". 
 * alert("Corte y afeitada") o alert("Corte").
 * Poner un alert en caso de que no se haga ni corte ni afeitada.
 **************************************************************************/

let largoPelo = prompt(`¿Tenés el pelo largo o corto?`);
let barba = prompt(`¿Tenés barba?`);

if (largoPelo === `largo` && barba ===`si`) alert("Corte y afeitada");
else if (largoPelo === `largo`) alert(`Corte`);
else if (barba === `si`) alert(`Afeitada`);
else alert(`No jodas`);

// 03
/*************************************************************************
 * 
 * 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 
 *************************************************************************/

let mes = Number(prompt(`Decime un numero de mes`));
if (mes === 1) alert(`El mes es enero`);
else if (mes === 2) alert(`El mes es febrero`);
else if (mes === 3) alert(`El mes es marzo`);
else if (mes === 4) alert(`El mes es abril`);
else if (mes === 5) alert(`El mes es mayo`);
else if (mes === 6) alert(`El mes es junio`);
else if (mes === 7) alert(`El mes es julio`);
else if (mes === 8) alert(`El mes es agosto`);
else if (mes === 9) alert(`El mes es septiembre`);
else if (mes === 10) alert(`El mes es octubre`);
else if (mes === 11) alert(`El mes es noviembre`);
else if (mes === 12) alert(`El mes es Diciembre`);
else if (mes !== Number) alert(`Te pedi un numero`);
else alert(`El mes no existe`);

// 04
/***********************************************
 *
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 * Repetir función pero pidiendo valor por parámetro y devolviendolo con return
 ***********************************************/

let numero = Number(prompt('decime un numero'));
numero *= numero;
alert(`Al cuadrado es ${numero}`);


// 05
/***********************************************
 *
 * Hacer una funcion que pida dos valores y una palabra
 * Los valores pueden ser "suma", "resta", "multiplicacion", "division"
 * Debe devolver el la operacion matematica correspondiente entre los dos valores
 * La funcion debe recibir los valores por parametros
 *
 ***********************************************/

let factor1 = Number(prompt(`Decime un número`));
let factor2 = Number(prompt(`Decime un segundo número`));
let operacion = prompt(`Elija suma, resta, multiplicacion o division`);

if (operacion === "suma") {
    let resultado = factor1 += factor2;
    alert(`El resultado es ${resultado}`);
} else if (operacion === "resta") {
    let resultado = factor1 -= factor2;
    alert(`El resultado es ${resultado}`);
} else if (operacion === "multiplicacion") {
    let resultado = factor1 *= factor2;
    alert(`El resultado es ${resultado}`);
} else if (operacion === "division") {
    let resultado = factor1 /= factor2;
    alert(`El resultado es ${resultado}`);
} else alert(`La operacion no pudo llevarse a cabo`);