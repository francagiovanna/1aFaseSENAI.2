// 5.1// Crie um programa que execute a validação de uma senha digitada
// pelo usuário. Caso ele digite a senha “1234” devemos informar a ele
//“acesso permitido”. Para qualquer outra senha digitada, informar “acesso
// negado”.
function exercicio5(){
    let senha = 123
    let senhaUsuario = prompt("Digite uma sequencia númerica(senha): ")

    if(senhaUsuario == senha){
        alert("Acesso permitido")
    }else{
        alert("Acesso negado.")
    }
}
// Mano Juca bateu a cabeça e está com problemas de
// raciocínio...
// Está analisando dois números há horas e não consegue
// descobrir qual deles é o maior. Vamos ajuda-lo!
// Crie um algoritmo que leia dois números A e B e imprima o
// maior deles.
function exercicio6(){
    let numeroA = prompt("Digite primeiro número: ")
    let numeroB = prompt("Digite segundo número: ")

    if(numeroA >= 0 ){
        alert("O primeiro número é o maior")
    }
    else{
        alert("Esse é o menor número")
    }
    if(numeroB >= 0){
        alert("O segundo numero é o maior")
    }
    else{
        alert("Esse é o menor número")
}
}