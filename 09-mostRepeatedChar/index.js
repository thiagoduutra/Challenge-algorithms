export function mostUsedChar(text) {
  // implementar logica aqui
  let newText = text.toLowerCase();
  let newLetterRep;
  let letraRep = 0;
  for (let i = 0; i < newText.length; i++) {
    let letra = newText[i];
    let cont = 0;
    for (let j = 0; j < newText.length; j++) {
      if (letra == newText[j]) {
        cont++;
        if (cont > letraRep) {
          letraRep = cont;
          newLetterRep = newText[i];
        }
      }
    }
  }
  return newLetterRep;
}
