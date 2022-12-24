/*
Verifica que todas las secuencias independientes de sistemas de iluminación navideña estén en orden estrictamente creciente. Tenemos dos arrays: systemNames y stepNumbers.

systemNames contiene los nombres de los sistemas de iluminación navideña, y stepNumbers contiene los números de paso de cada sistema.

Debemos verificar que los stepNumbers de cada sistema estén en orden estrictamente creciente. Si esto es cierto, devuelve true; de lo contrario, devuelve false.

Por ejemplo:

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers) // => true

//* tree_1 tiene los pasos: [1, 2]
//* tree_2 tiene los pasos: [33, 44]
//* house tiene los pasos: [10, 20]

//* true: Los pasos de cada sistema están en orden estrictamente creciente

checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false

//* tree_1 tiene los pasos: [2, 1]
//* house tiene los pasos: [10]

//* false: tree_1 tiene los pasos de forma decreciente

Ten en cuenta que:

La posición del nombre del sistema en systemNames y el número de paso en stepNumbers corresponden al mismo sistema.
Los pasos en stepNumbers pueden repetirse para diferentes sistemas.
*/

function checkStepNumbers(
  systemNames: string[],
  stepNumbers: number[]
): boolean {
  const obj: { [key: string]: number[] } = {};
  systemNames.forEach((_, index) => {
    obj.hasOwnProperty(systemNames[index])
      ? (obj[systemNames[index]] = [
          ...obj[systemNames[index]],
          stepNumbers[index],
        ])
      : (obj[systemNames[index]] = [stepNumbers[index]]);
  });
  return Object.values(obj)
    .map((array) => {
      return array.every((elem, i) => {
        return i === 0 || elem >= array[i - 1];
      });
    })
    .every((ele) => ele === true);
}

console.log(
  checkStepNumbers(
    ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
    [1, 33, 10, 2, 44, 20]
  )
); //true
console.log(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])); //false
console.log(checkStepNumbers(['tree_1', 'tree_1', 'house'], [1, 2, 10])); //true
console.log(
  checkStepNumbers(
    [
      'house',
      'house',
      'tree_1',
      'tree_1',
      'house',
      'tree_2',
      'tree_2',
      'tree_3',
    ],
    [5, 2, 1, 2, 3, 4, 5, 6]
  )
); //false
