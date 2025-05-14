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
// Conte de 1 até 15 e mostre se o número é par ou ímpar.
    let contador5 = 1
function exercicio7(){
    while(contador5 <= 15){
        let resto1 = contador5 % 2
        if(resto1 != 0){
            alert("Número: " + contador5 + " é impar")
        }else{
            alert("Número: " + contador5 + " é par")}
       contador5++
    }
    }
    // Conte até 100 e imprima somente os divisíveis por 4.
    let cont = 0
    function exercicio8(){
        while(cont <= 100){
            let divis = cont % 4
            if(divis == 0){
                alert("Números: " + cont + " é divisivel")
            } cont++
        }
    }
    // Faça um loop que mostre os números de 1 a 10 com a frase “Número: X”.
    let cont1 = 1
    function exercicio9(){
        while(cont <=10 ){
            alert("Número: " + cont1)
            cont1++
        }
    }

// Experimento do FOR

// Conte até 20 e exiba “Fizz” para múltiplos de 3.
function exercicio10(){
   for(let cont2 = 1; cont2<20; cont2++){
    let mult2 = cont2 % 3
    if(mult2 == 1){
        alert("Números: " + cont2 + " Fizz")
    }
   }
}

// Voltando pro while

//Conte até 20 e exiba “Buzz” para múltiplos de 5.
    let cont3 = 1
function exercicio11(){
    while(cont3 <=20){
        let mult3 = cont3 % 5
        if(mult3 == 0){
            alert("Números: " + cont3 + "Buzz")
        } cont3++
    }
}
// Voltando pro For

// Conte quantos números pares existem entre 1 e 50.
function exercicio12(){
    for(let i = 1; i<50; i++){
        let rest = i % 2
        if(rest == 0){
            alert("Esses são os números pares: " + i)
        }
    }
}

// Conte quantos múltiplos de 6 existem até 100.
function exercicio13(){
    for(i = 1; i<100; i++){
        let multiplos = i % 6
        if(multiplos == 0){
            alert("Múltiplos: " + i)
        }
    }
}

// Conte de 1 a 30, pulando os múltiplos de 4.
function exercicio14(){
    for(i = 1; i<30; i++){
        let up = i % 4
        if(i % 4 !== 0){
            alert("todos menos multiplos de 4: " + i)
        }
    }
}

// Some os números de 1 a 100, mas pare se a soma passar de 400.
function exercicio15(){
    for(i = 1; i<100; i++){
       
    }
}

