/* 1 */
var arrayVacio = [];
/* 2 */
var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/* 3 */
var arrayNumerosPares = [0, 2, 4, 6, 8];
/* 4 */
var arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
/* 5 */
function suma(a, b) {
    return a + b;
  }
/* 6 */
function potenciacion(a, b) {
    return Math.pow(a, b);
  }
/* 7 */
function separarPalabras(str) {
    return str.split(" ");
  }
/* 8 */
function repetirString(str, num) {
    var stringRepetido = "";
    for (var i = 0; i < num; i++) {
      stringRepetido += str;
    }
    return stringRepetido;
  }
/* 9 */

/* 10 */
function ordenarArray(array) {
    return array.sort(function(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
/* 11 */
function obtenerPares(array) {
    var pares = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        pares.push(array[i]);
      }
    }
    return pares;
  }
/* 12 */
function pintarArray(array) {
    return '[' + array.join(', ') + ']';
  }  
/* 13 */

/* 14 */
function eliminarDuplicados(array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
      if (resultado.indexOf(array[i]) === -1) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
  
/* 15 */
var arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
/* 16 */
var holaMundo = ["Hola", "Mundo"];
/* 17 */
var loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
/* 18 */
var arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
/* 19 */
function multiplicacion(num1, num2) {
    return num1 * num2;
  }
/* 20 */
function division(num1, num2) {
    return num1 / num2;
  }
  
/* 21 */
function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
/* 22 */
var arrayFunciones = [suma, resta, multiplicacion];
/* 23 */
function ordenarArray2(array) {
    return array.sort(function(a, b) {
      return b - a;
    });
  }
/* 24 */
function obtenerImpares(array) {
    var impares = array.filter(function(num) {
      return num % 2 !== 0;
    });
    return impares;
  }
/* 25 */
function sumarArray(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  }
/* 26 */
function multiplicarArray(array) {
    var multiplicacion = 1;
    for (var i = 0; i < array.length; i++) {
      multiplicacion *= array[i];
    }
    return multiplicacion;
  }
  