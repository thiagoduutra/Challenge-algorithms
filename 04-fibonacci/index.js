export function fibonacci(value) {
  // implementar logica aqui
  if (value <= 1) {
    return value;
  }

  const result = [0, 1];

  for (let i = 2; i <= value; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[result.length - 1];
}
