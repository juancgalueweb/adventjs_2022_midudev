/*
Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos Gift y Quantity respectivamente.

La tabla usa los símbolos: + para el borde superior, * para el borde inferior, - para las líneas horizontales y | para las líneas verticales.

Ten en cuenta:

Usa sólo el espacio que necesitas para dibujar la tabla.
Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
No hace falta que ordenes los resultados.
La tabla no termina con salto de línea.
*/

function printTable(gifts: { name: string; quantity: number }[]): string {
  let topLeft: string = '';
  let topRight: string = '';
  let giftRightGap: string = '';
  let quantityRightGap: string = '';
  const giftsNamesLen: number[] = [];
  const giftsQtyLen: number[] = [];
  let giftsToPrint: string = '';
  gifts.forEach((item) => {
    giftsNamesLen.push(item.name.length);
    giftsQtyLen.push(item.quantity.toString().length);
  });
  const longestGiftName: number = Math.max(...giftsNamesLen);
  const longestGiftQty: number = Math.max(...giftsQtyLen);
  longestGiftName <= 4
    ? (topLeft = '+'.repeat(8)) && (giftRightGap = ' '.repeat(1))
    : (topLeft = '++' + '+'.repeat(longestGiftName) + '++') &&
      (giftRightGap = ' '.repeat(longestGiftName + 1 - 4));
  longestGiftQty <= 8
    ? (topRight = '+'.repeat(11)) && (quantityRightGap = ' |')
    : (topRight = '+++' + '+'.repeat(longestGiftQty)) &&
      (quantityRightGap =
        ' '.repeat(longestGiftQty - 'Quantity'.length) + ' |');
  gifts.forEach((item) => {
    giftsToPrint +=
      '| ' +
      item.name +
      ' '.repeat(topLeft.length - 'Gift'.length - item.name.length) +
      ' | ' +
      item.quantity.toString() +
      ' '.repeat(topRight.length - 3 - item.quantity.toString().length) +
      ' |' +
      '\n';
    return giftsToPrint;
  });
  return (
    topLeft +
    topRight +
    '\n' +
    '| ' +
    'Gift' +
    giftRightGap +
    '| ' +
    'Quantity' +
    quantityRightGap +
    '\n' +
    '| ' +
    '-'.repeat('Gift'.length + giftRightGap.length - 1) +
    ' | ' +
    '-'.repeat('Quantity'.length + quantityRightGap.length - 2) +
    ' |' +
    '\n' +
    giftsToPrint +
    '*'.repeat(topLeft.length + topRight.length)
  );
}

const gifts1 = [
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 },
];
const gifts2 = [
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
];
const gifts3 = [
  { name: 'Toy', quantity: 12 },
  { name: 'Mic', quantity: 123 },
];
console.log(printTable(gifts2));
