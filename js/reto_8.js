/*
Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

checkPart("uwu") // true
"uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
"miidim" puede ser un palíndromo después de eliminar la primera "i"
ya que "midim" es un palíndromo

checkPart("midu") // false
"midu" no puede ser un palíndromo después de eliminar un carácter
*/

function checkPart(part) {
  const partArray = [...part];
  const isPalidrome = (word) => {
    const right = [...word.slice(-(word.length / 2))].reverse().join("");
    const left = word.slice(0, word.length / 2);
    return right === left;
  };
  if (isPalidrome(part)) {
    return true;
  } else {
    for (const i of partArray.keys()) {
      if (isPalidrome(part.substring(0, i) + part.substring(i + 1)))
        return true;
    }
    return false;
  }
}

console.log(checkPart("miidim"));
//El puntaje en la plataforma de Midudev es muy bajo, solo 10 puntos
