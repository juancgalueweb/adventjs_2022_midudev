/*
Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2

const heights = [1, 7, 3, 5]
checkJump(heights) // false

Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3

Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.

A tener en cuenta
Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).

*/

function checkJump(heights) {
  function isAscending(arr) {
    return arr.every((ele, i) => {
      return i === 0 || ele >= arr[i - 1];
    });
  }
  function isDescending(arr) {
    return arr.every((ele, i) => {
      return i === 0 || ele <= arr[i - 1];
    });
  }
  return (
    isAscending(heights.slice(0, heights.indexOf(Math.max(...heights)))) &&
    isDescending(
      heights.slice(
        heights.indexOf(Math.max(...heights)) + 1,
        heights.length + 1
      )
    ) &&
    !isAscending(heights) &&
    !isDescending(heights) &&
    !heights.every((ele) => ele === heights[0])
  );
}

const heights = [1, 3, 8, 5, 2];
const heights2 = [1, 7, 3, 5];
const heights3 = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1];

console.log(checkJump(heights2));
