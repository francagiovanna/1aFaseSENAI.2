function brinquedos(){
let brinquedos = Number(prompt("Quantos brinquedos você levou?: "))

if(brinquedos == 1){
    alert("Você recebera uma moedas")
}else if(brinquedos == 2){
    alert("Você recebera duas moedas")
}else if(brinquedos == 3){
    alert("Você recebera três moedas")
}else if(brinquedos >= 4){
    alert("O maximo de moedas para receber é 3 moedas")
}else{
    alert("Você não recebera nenhuma moeda")
}

}