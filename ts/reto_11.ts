/* 
Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5

Ten en cuenta:

El formato de la hora es hh:mm:ss.
El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la tarea que falta por completar.
La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar como 1/2).
Si ya se ha completado la tarea, la fracción sería 1/1.
Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.
*/

function getCompleted(part: string, total: string) {
  const MCD = (a: number, b: number): number => {
    let temporal;
    while (b) {
      temporal = b;
      b = a % b;
      a = temporal;
    }
    return a;
  };

  const partArray = part.split(':');
  const partInSeconds =
    +partArray[0] * 60 * 60 + +partArray[1] * 60 + +partArray[2];
  const partTotal = total.split(':');
  const totalInSeconds =
    +partTotal[0] * 60 * 60 + +partTotal[1] * 60 + +partTotal[2];

  const MCDof = MCD(partInSeconds, totalInSeconds);
  const partMinExpression = partInSeconds / MCDof;
  const totalMinExpression = totalInSeconds / MCDof;
  return partMinExpression + '/' + totalMinExpression;
}

console.log(getCompleted('02:20:20', '03:30:30'));
console.log(getCompleted('00:10:00', '01:00:00'));
