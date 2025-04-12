let idade = Number(prompt("Digite sua idade:"));
let temEspadaMagica = prompt("Você tem uma espada mágica? (sim ou nao)");

if (idade > 18 && temEspadaMagica === "sim") {
  alert("Você pode lutar contra o dragão!");
} else {
  alert("Fuja enquanto há tempo!");
}
