// Em uma feira de doação de brinquedos recicliveis, você pode levar uma quanteidade de brinquedos
//e a quantidade de brinquedos que você levar vai ser a quantidade de eco moedas que você vai receber
//(Eco Moedas são as moedas de troca que você usa paea comprar mais binquedos). Mas caso você não levar
// nenhum brinquedo, você não recebe nenhuma moeda. O maximo de moedas á receber são 3.

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