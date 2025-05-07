// Mostre apenas os números pares de 1 a 20.
let contador = 1
function exercicio1(){
    while(contador <= 20){
        let resto = contador % 2
        if (resto === 0){
            alert ("Os números pares são: " + contador)
            break
        } contador++
    }
}
// Mostre apenas os números impares de 1 a 20
let contador1 = 1
function exercicio2(){
    while(contador1 <= 20){
      let resto = contador1 % 2
      if(resto != 0){
        alert("Os números impares são: " + contador1)
        break
      } contador1++
    }
}
// Imprima “Olá, mundo!” 5 vezes.
let contador2 = 1
function exercicio3(){
    while(contador2 <= 5){
        alert("olá mundo")
        contador ++
        break
    }
    
}
// Conte de 0 a 50 pulando de 5 em 5.
function exercicio4(){
    let contador3 = 5
    while(contador3 <= 50){
        alert("Números de 5 em 5, de 0 á 5: " + contador3)
        contador3 += 5
    } 
    
}
// Conte de 100 até 0 diminuindo de 10 em 10.
function exercicio5(){
    let num = 100
    while(num >= 0){
        alert("Números:" + num )
            num -= 10
            break
    } 
}
// Conte de 0 até 30 e mostre apenas os múltiplos de 3.
  let contador4 = 0
function exercicio6(){
    while(contador4 <= 30){
        let mult = contador4 % 3
        if(mult == 0){
            alert("Números: " + contador4)
        } contador4++
    }
}
