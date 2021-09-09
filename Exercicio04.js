/*Faça um programa que leia um vetor de 20 posições. Atribua valor 0 para todos os elementos que possuírem valores pares.
     Mostre o vetor antes e depois da substituição dos valores pares. Em Linguagem JS */

var vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log("Vetor:")
for(var i = 0; i < 20; i++){
    console.log("Valor: " + vetor[i])
}

console.log("Colocanco 0 no lugar dos numeros pares: ")
for(var i = 0; i < 20; i++){
    if(vetor[i] %2 == 0){
        console.log("Valor: 0")
    }else{
        console.log("Valor: " + vetor[i])
    }
}