/*Elabore um programa que leia um vetor de quarenta posições. Em seguida conte e mostre todos os valores pares */

for(let i = 0; i < 5; i++){
    let vetor = []
    vetor[i] = prompt(`Digite o valor na posição [${i}]: `)

    if(vetor[i] %2 == 0){
        let valoresPares = []
        valoresPares[i] = vetor[i]

        console.log(`Valores pares do vetor: ${valoresPares[i]}`)
    }
}