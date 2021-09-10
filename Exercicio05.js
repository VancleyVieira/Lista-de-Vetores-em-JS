/*Criar dois vetores A e B cada um com 10 elementos inteiros. Construir um vetor C,
     onde cada elemento de C é a soma dos respectivos elementos em A e B,*/

let vetorA = [1,2,3,4,5,6,7,8,9,10]
let vetorB = [10,9,8,7,6,5,4,3,2,1]
let vetorC = []

for(let i = 0; i < 10; i++){
    vetorC[i] = vetorA[i] + vetorB[i]

    console.log(`\nVetor A: ${vetorA[i]}`)
    console.log(`\nVetor B: ${vetorB[i]}`)
    console.log(`\nVetor C: ${vetorC[i]}`)
}
