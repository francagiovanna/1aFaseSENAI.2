// Teste de puxar botão
function mostraroi(){
alert("Oi mundo")
}
function exercicio1(){
    let num1 = Number(prompt("Digite um número"))
    let num2 = Number(prompt("Digite outro número"))
    let num3 = Number(prompt("Digite outro número"))
    let soma = num1 + num2 + num3
    alert(" A soma dos dois números é:" + soma   )
}
function exercicio2(){
    let num1 = Number(prompt("Digite um número"))
    let num2 =  Number(prompt("Digite outro número"))
    let media = (num1 + num2) / 2
    alert ("A media dos dois números é: " + media)
}
// Solicite ao usuário que digite seu nome usando prompt .
// Exiba uma saudação personalizada no formato: "Olá, [nome]! Seja bem-vindo!" usando alert.
function exercicio3(){
    let nome = prompt("Digite um seu nome")
    alert ("Olá, " + nome +"! Seja bem-vindo!")
}
// Peça ao usuário para inserir dois números (você pode usar prompt para
// pegar os valores como strings e depois convertê-los para números com
// Number ).
// Mostre o resultado da soma desses dois números usando alert .
function exercicio4(){
    let num1 = Number(prompt("Digite um número"))
    let num2 =  Number(prompt("Digite outro número"))
    let soma = num1 +num2 
    alert("O resultado da soma é: " + soma)
}
// Solicite ao usuário que insira uma temperatura em Celsius.
// Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
// Exiba o resultado em uma mensagem de alert .
function exercicio5(){
    let tempCelsius = Number(prompt("Digite a temperatura em Celsius"))
    let converçao = tempCelsius * 9/5 +32 
    alert("A temperatura convertida para Fahrenheit é: " + converçao)
}
// Solicite ao usuário que insira um número.
// Verifique se o número é par ou ímpar e exiba uma mensagem
// correspondente usando alert.
function exercicio6(){
    let num1 = Number(prompt("Digite o número"))

if(num1 % 2 ===0 ){
    alert("Esse numero é par.")
}else{
    alert("Esse numero é impar.")
}
}
// Solicite ao usuário que insira seu peso e altura.
// Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula:
// IMC = peso / (altura2).
// Exiba o resultado em um alert e classifique o IMC de acordo com os
// valores:
// Menos de 18,5: Abaixo do peso
// Entre 18,5 e 24,9: Peso normal
// Entre 25 e 29,9: Sobrepeso
// 30 ou mais: Obesidade
function exercicio7(){
    let peso = Number(prompt("Digite seu peso: "))
    let altura =  Number(prompt("Digite sua altura: "))
    let imc = peso / (altura ** 2)

if (imc < 18.5 ){
    alert("Abaixo do peso.")
}
else if(imc == 18.24 && 24.9){
    alert("Peso normal")
}
else if(imc == 25 && 29.9){
    alert("Sobrepeso")
}
else if (imc >= 30){
    alert("Obesidade")
}
    alert("Seu índice de massa corporal (IMC) é: " + imc)
}
// Solicite ao usuário que insira um ano.
// Verifique se o ano é bissexto (um ano é bissexto se for divisível por 4, mas
// não por 100, exceto se for divisível por 400) e exiba uma mensagem com o
// resultado em alert.
function exercicio8(){
    let ano = Number(prompt("Digite um ano: "))

if (ano  % 400 === 0){
    alert("Ele é bissexto")
}
else if(ano % 100 === 0){
    alert("Não é bissexto")
}
else if(ano % 4 === 0){
    alert("é bissexto")
}
else{
    alert("Não é bissexto")
}
}
// Junta o nome do usuário com um adjetivo e um superpoder aleatório.
// Nome (ex: "Carlos").
// "Capitão Carlos, o Invencível das Sombras"
function exercicio3Lista2(){
    let nome = prompt("Digite seu nome para saber seu nome de super heroi: ")
    let min = 1
    let max = 4
    let numeroaleatorio = Math.floor(Math.random()* (max - min) + min)

    Math.ceil

    let frase1 = "Capitão américa"
    let frase2 = "Homem de ferro"
    let frase3 = "Homem aranha"

    if(numeroaleatorio ===1 ){
        alert(nome + frase1)
    }
    else if(numeroaleatorio ===2){
        alert(nome + frase2)
    }
    else if (numeroaleatorio === 3){
        alert(nome + frase3)
    }
}
// Mostra uma previsão aleatória com base no signo do usuário.
// Seleção do signo (ex: "Leão").
// "Hoje é um ótimo dia para buscar novos desafios, Leão!"
function exercicio4Lista2(){
    let signo = prompt("Digite qual é seu signo: ")
    let aries, touro, gemeos, cancer, leao, virgem, libra, escorpiao, sargitario, capriconio, aquario, peixes 

if(signo == aries){
    alert("Hoje é um ótimo dia para buscar novos desafios, aries!")
}
else if(signo == touro){
    alert("acredite no seu caminho")
}
else if(gemeos){
    alert("confie no seu caminho")

}
else if(cancer){
    alert("")
}
else if(leao){
    alert("")
}
else if(virgem){
    alert("")
}
else if(libra){
    alert("")
}
else if(escorpiao){
    alert("")
}
else if(sargitario){
    alert("")
}
else if(capriconio){
    alert("")
}
else if(aquario){
    alert("")
}
else if(peixes){
    alert("")
}
}
// O usuário joga contra o computador para ver quem vence no jogo de
// par ou ímpar.
// 1. O usuário escolhe “Par” ou “Ímpar”.
// 2. Depois, o usuário digita um número de 0 a 10
// 3. O computador gera aleatoriamente um número de 0 a 10.
// 4. O sistema soma os dois números.
// 5. Se a soma for par e o usuário escolheu “Par”, ele ganha.
// Se a soma for ímpar e o usuário escolheu “Ímpar”, ele também ganha.
function exercicio5Lista2(){
    let escolha = prompt("Escolha(par ou ímpar): ")
    let numeroUsuario = prompt("Digite um número(de 0 a 10: ")
    let numeroAleatorio = Math.floor(Math.random()* (10 - 0) + 0)
    let soma = numeroUsuario + numeroUsuario

    Math.ceil

    if(soma % 2 ===0){
        alert("Se você escolheu par, você ganhou!!")
    }
    else if(soma % 1 ===0){
        alert("Se você escolheu impar, você ganhou!!")
    }
    else{
        alert("Não ouve vencedor:(")
    }
    }
// Conta quantos cliques o usuário deu.
// Cliques em botão.
// “Você clicou 32 vezes!” Ao clicar no botão de resultado.
let contador = 0
function clique(){
    contador++
}
function mostrar(){
    alert("Você clicou " + contador)
}
// Usuário tenta adivinhar um número aleatório de 1 a 100.
// Número digitado.
// “Tente novamente.”
function exercicio6Lista2(){
    let numeroDigitado = Number(prompt("Digite um número de 1 a 100: "))
    let numeroAleatorio = Math.floor(Math.random()* (100 - 1) + 0)

    if(numeroDigitado == numeroAleatorio){
        alert("Você acertou o número!!")
    }
    else{
        alert("Tente novamente...")
    }
}
// Perguntas de múltipla escolha com pontuação final.
// Alternativa selecionada.
// “Você acertou 3 de 5 perguntas.”
function exercicio7Lista2(){
    let pergunta1 = 5
    let pergunta2 = 4
    let pergunta3 = 3 
    let pergunta4 = 2
    let pergunta5 = 5
    let certo1 = 5
    let certo2 = 4
    let certo3 = 2
    let certo4 = 2
    let certo5 = 3
    let pontuacao = 0

    if(pergunta1 === 5){
        pontuacao++
    }else{
        alert("Pergunta 1 errada")
    }
    if(pergunta2 === 4){
        pontuacao++
    }else{
        alert("Pergunta 2 errada")
    }
    if(pergunta3 === 2){
        pontuacao++
    }else{
        alert("Pergunta 3 errada")
    }
    if(pergunta4 === 2){
        pontuacao++
    }else{
        alert("Pergunta 4 errada")
    }
    if(pergunta5 === 3){
        pontuacao++
    }else{
        alert("Pergunta 5 errada")
    }

    alert("Você acertou " + pontuacao + " de 5 perguntas. ")

}
// Responde aleatoriamente com “Sim”, “Não” ou “Talvez”.
// Clique em botão.
// “Talvez”
let resposta1 = sim
let resposta2 = nao
let resposta3 = talvez
let pergunta = prompt("Responda(sim, não, talvez): ")
function exercicio9Lista2(){
    resposta++
}
function mostrar(){
    alert("Você respondeu: " + resposta)

}
