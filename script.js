const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
const printToPage = (header, data) => {
  document.body.innerHTML += `<h3>${header}</h3><p>${data}</p>`;
};

printToPage("Všechna čísla", numbers.join(", "));

const squaredNumbers = numbers.map(num => num ** 2);
printToPage("Druhé mocniny čísel", squaredNumbers.join(", "));

const negativeNumbers = numbers.filter(num => num < 0);
printToPage("Záporná čísla", negativeNumbers.join(", "));

const absoluteValues = numbers.map(num => Math.abs(num));
printToPage("Absolutní hodnoty", absoluteValues.join(", "));

const evenNumbers = numbers.filter(num => num % 2 === 0);
printToPage("Sudá čísla", evenNumbers.join(", "));

const divisibleByThree = numbers.filter(num => Math.abs(num) % 3 === 0);
printToPage("Čísla dělitelná třemi", divisibleByThree.join(", "));

const distancesFromFive = numbers.map(num => Math.abs(num - 5));
printToPage("Vzdálenosti od čísla 5", distancesFromFive.join(", "));

const squaredDistances = distancesFromFive.map(dist => dist ** 2);
printToPage("Druhé mocniny vzdáleností od čísla 5", squaredDistances.join(", "));

const negativeCount = negativeNumbers.length;
printToPage("Počet záporných čísel", negativeCount);

const totalSum = numbers.reduce((sum, num) => sum + num, 0);
printToPage("Součet všech čísel", totalSum);

const average = totalSum / numbers.length;
printToPage("Průměr všech čísel", average.toFixed(2));

const positiveSum = numbers.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
printToPage("Součet kladných čísel", positiveSum);
