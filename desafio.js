let numeroUsuario1 = Number(prompt("Digite o primeiro número:"));
let numeroUsuario2 = Number(prompt("Digite o segundo número:"));

let operacao = prompt("Qual a operação desejada? (soma, subtracao, multiplicacao, divisao)");
let resultado;

if (operacao === "soma") {
  resultado = numeroUsuario1 + numeroUsuario2
  console.log("O resultado da soma é: " + resultado)
}else if (operacao === "subtracao") {
  resultado = numeroUsuario1 - numeroUsuario2
  console.log("O resultado da subtração é: " + resultado)
}else if (operacao === "multiplicacao") {
  resultado = numeroUsuario1 * numeroUsuario2;
  console.log("O resultado da multiplicação é: " + resultado)
}else if (operacao === "divisao") {
  if (numeroUsuario2 === 0) {
    console.log("Não é possível dividir por zero.")
  }else {
    resultado = numeroUsuario1 / numeroUsuario2
    console.log("O resultado da divisão é: " + resultado)
  }
}else {
  console.log("Operação inválida.")
}
