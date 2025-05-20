// Peça ao usuário sua idade e se ele tem carteira de motorista. 
// Exiba "Pode dirigir" se for maior de 18 e tiver carteira.
function exercicio1(){
    let idade = Number(prompt("Digite sua idade: "))
    let carteira = prompt("Você tem carteira de motorista?(sim ou não): ")

    if(idade >= 18 && carteira == "sim"){
        alert("O usuário pode dirigir!!")
    }
    else if(idade >=18){
        alert("O usuário precisa de uma carteira de motorista.")
    }
    else if(carteira ==  "sim"){
        alert("O usuário precisa ter 18 anos.")
    }
    else{
        alert("O usuário não pode dirigir.")
    }
}
// Verifique se um número digitado é positivo e par.
function exercicio2(){
    alert("Verificação de números (positivo e par)")
    
    let num = Number(prompt("Digite um número: "))
    let resto = num % 2  // verificação par
    
    if(resto === 0 && num > 0 ){
        alert("Esse número é positivo e par.")
    }else if(resto === 0){
        alert("Esse número é apenas par.")
    }else if(num < 0){
        alert("Esse valor é negativo.")
    }else if (num > 0){
        alert("Esse valor é apenas positivo.")
    }else{
        alert("Não se enquadra nas opções.")
    }
}
// Solicite um nome de usuário e uma senha. Exiba "Acesso permitido"
// se o nome for "admin" ou a senha for "1234".
function exercicio3(){
    
    let nome = prompt("Digite seu nome de usuário: ")
    let senha = Number(prompt("Digite sua senha: "))

    if (nome === "admin" && senha === "1234"){
        alert("Acesso permitido")
    }else if(nome === "admin"){
        alert("Senha incorreta.")
    }else if(senha === "1234"){
        alert("Usuário incorreto")
    }else{
        alert("Tente logar novamente.")
    }
}
// Peça dois números. Exiba "Valores válidos" se um for positivo e o 
// outro for negativo.
function exercicio4(){
    let valor = Number(prompt("Digite o primeiro número: ")) //positivo
    let valor1 = Number(prompt("Digite o segundo número: ")) //negativo

    if(valor > 0 && valor1 < 0){
        alert("Valores válidos")
    }else if(valor < 0 && valor1 > 0){
        alert("Valores inválidos")
    }else {
        alert("Valores fora das opções.")
    }
}
// Peça uma nota. Exiba "Aprovado" se a nota for maior que 6 e menor
// ou igual a 10.
function exercicio5(){
    let nota = Number(prompt("Digite sua nota: "))
    if(nota >= 6){
        alert("aprovado.")
    }else if(nota < 6){
        alert("Reprovado.")
    }else{
        alert("Sem nota aparente")
    }
}
// Peça um número. Exiba "Número inválido" se ele não estiver entre 1 e 100.
function exercicio6(){
    let num = Number(prompt("Digite um numero: "))

    if(num <= 100){
        alert("Número valido.")
    }
    else{
        alert("Número inválido.")
    }
}
// Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de
// 18 ou estudante.
function exercicio7(){
    let idade = Number(prompt("Digite sua idade: "))
    let est = prompt("Você estuda?(sim ou não)")
    if(idade <18 || est == "sim" ){
        alert("Meia entrada.")
    }
    else{
        alert("Entrada inteira.")
    }
}
// Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não).
// Exiba "Cadastro completo" se ambos forem "sim".
function exercicio8(){
    let termos = prompt("Termos aceitos? (sim ou não): ")
    let cadst = prompt("Email confirmado? (sim ou não): ")

    if(termos == "sim" && cadst == "sim"){
        alert("Cadastro completo")
    }
    else if(termos == "não"){
        alert("Cadastro não concluido. Aceite os termos")
    }
    else if (cadst == "não"){
        alert("Cadastro não concluido. Adicione seu email")
    }else{
        alert("Cadastre-se")
    }
}
// Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso
// entre 50 e 90 kg.
function exercicio9(){
    let altura = Number(prompt("Digite sua altura: "))
    let peso = Number(prompt("Digite seu peso: "))

    if(altura === 1.60 && peso >= 50 && peso <= 90){
        alert("Apto para o esporte.")
    }else {
        alert("O usuario não esta apto para o esporte.")
    }
}
// Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se
//for verdade, exiba "Acesso negado".
function exercicio10(){
    let idade = prompt("É maior de iadade? (sim ou não): ")
    let termos = prompt("Os termos foram aceitos? (sim ou não): ")

    if(idade == "não" && termos == "não"){
        alert("Acesso negado.")
    }else{
        alert("Volte ao inicio do cadastro")
    }
}
// While com condições compostas

// Enquanto a senha digitada não for “abc123” e o número de tentativas for
// menor que 3, peça a senha novamente.
function exercicio11(){
    i = "abc123"
    let tentativa = 0
    let senhaDigitada = Number(prompt("Digite senha: "))
    while(senhaDigitada !== i &&  tentativa <= 3){
    senhaDigitada = prompt("Digite a senha: ")
    tentativa++
    }
    if(senhaDigitada === i){
        alert("Acesso permitido!")
    }else{
        alert("Número de tentativas excedido!")
    }
}
// Enquanto o usuário não aceitar os termos ou tiver menos de 18 anos, continue
// perguntando.
function exercicio12(){
    let termos = prompt("Aceita os termos? (sim ou não): ")
    let idade = prompt("Tem menos de 18? (sim ou não): ")

    while(termos !== "sim" && idade !== "sim"){
        alert("Você precisa aceitar os termos e ser maior de idade!")
        termos = prompt("Aceita os termos? (sim ou não): ")
        idade = prompt("Tem menos de 18? (sim ou não): ")
    }
        alert("Cadastro permitido!")
}
// Solicite dois números até que ambos sejam pares.
function exercicio13(){
    let num = Number(prompt("Digite o primeiro númnero: "))
    let num1 = Number(prompt("Digite o segundo número: "))
    while (num % 2  !== 0 || num1 % 2 !== 0){
        num = Number(prompt("Digite o primeiro númnero: "))
        num1 = Number(prompt("Digite o segundo número: "))
    }
}
