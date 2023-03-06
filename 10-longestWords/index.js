export function longestWords(words) {
  // implementar logica aqui
  //1º: Obter o tamanho do primeiro elemento do índice
  let maxWords = words[0].length;
  //2º: Percorrer o array para achar o maior elemento usando a função Math.max()
  words.map((mapear) => (maxWords = Math.max(maxWords, mapear.length)));
  //3ª: Criando um novo array para receber os maiores valores dentro desse array
  let newArray = words.filter((mapear) => mapear.length == maxWords);
  return newArray;
}
