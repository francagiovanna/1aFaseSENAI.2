let quantidadeItens = prompt("Digite a quantidade de itens")
let valorTotal = prompt("Digite o valor total.")

if (quantidadeItens == 3){
    console.log ("Valor total não suficiente.")
}else if (valorTotal >= 100){
    console.log ("Faça a compra de 3 itens.")
}else if (quantidadeItens == 3 && valorTotal >=100){
    console.log ("Desconto aplicado!")
}else{
    console.log ("Desconto não aplicado dessa vez")
}