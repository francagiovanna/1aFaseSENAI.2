let combustivel = prompt ("Digite a quantidade de combustivel que você tem (l): ")
let clima = prompt ("O clima está como? (bom ou ruim)")

if(combustivel <= 50){
    console.log ("Combustivel não suficiente")
} else if (clima != bom){
    console.log ("O clima não está agradavel para pouso.")
} else if (combustivel == 50 && clima == 50){
    console.log ("Pouso autorizado!")
}else{
    console.log("Abortar missão.")
    
}