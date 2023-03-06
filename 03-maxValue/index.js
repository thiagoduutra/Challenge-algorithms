export function maxValue(values) {
  // implementar logica aqui
  let maiorNumero = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= maiorNumero) {
      maiorNumero = values[i];
    } else if (maiorNumero == 0) {
      maiorNumero = values[i];
    }
  }
  return maiorNumero;
}
