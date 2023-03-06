export function isPrime(value) {
  // implementar logica aqui
  let cont = 0;
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      cont++;
    }
  }
  if (cont === 2) {
    // Se conseguiu fazer a divisão apenas por dois números
    return true;
  } else {
    return false;
  }
}
