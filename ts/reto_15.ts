/*
Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

Bolas de colores : B
Regalos pequeños : R
Piñas de pino : P
El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R
Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

   R
  P B
 R B B
B P R P
Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

decorateTree('B P R P')
[
'R',
'P B',
'R B B',
'B P R P'
]

decorateTree('B B') // ['B', 'B B']

Ten en cuenta que:
El programa recibe siempre la cadena de texto que representa la base del árbol.
Hay que generar el árbol completo, es decir, la base y las filas que se generan a partir de ella, hasta arriba.
Hay que seguir la fórmula para saber qué decoración colocar en cada posición.
*/

function decorateTree(base: string): string[] {
  type Prop = {
    PP: string;
    BB: string;
    RR: string;
    BP: string;
    PB: string;
    BR: string;
    RB: string;
    PR: string;
    RP: string;
  };

  const dict: Prop = {
    PP: 'P',
    BB: 'B',
    RR: 'R',
    BP: 'R',
    PB: 'R',
    BR: 'P',
    RB: 'P',
    PR: 'B',
    RP: 'B',
  };

  const tree: string[] = [];
  let baseArray: string[] = base.split(' ');
  const baseArrayLength = baseArray.length;
  tree.push(baseArray.join(' '));
  let result: string[] = [];
  while (tree.length < baseArrayLength) {
    baseArray.forEach((_, index, array) => {
      if (index < array.length - 1) {
        let expr;
        expr = array[index].concat(array[index + 1]);
        console.log(dict.BB);
      }
    });
    tree.unshift(result.join(' '));
    baseArray = result;
    result = [];
  }
  return tree;
}

// console.log(decorateTree('B P R P'));
console.log(decorateTree('B B'));
// console.log(decorateTree('B B P R P R R'));

//Este resultado no es óptimo según la puntuación obtenida, pero funciona y lo entiendo
