export function isAnagram(word1, word2) {
  // implementar logica aqui
  //1º => Ver se as strings tem a mesma quantidade de letras
  if (word1.length !== word2.length) {
    return false;
  }
  //2º => Criar duas variáveis para as novas strings
  let newTest = word1.toLowerCase().split("").sort().join("");
  let newOriginal = word2.toLowerCase().split("").sort().join("");
  return newTest === newOriginal;
}
