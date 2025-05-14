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