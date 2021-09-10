/* Criar um  vetor A com  10 elementos inteiros. Construir um vetor B
     também com 10 elementos onde cada elemento de B é o dobro dos respectivos elementos de A*/

let vetorA = [1,2,3,4,5,6,7,8,9,10]
let vetorB = [3,4,5,6,7,1,2,9,8,11]

for(let i = 0; i < 10; i++){
    vetorB[i] = vetorA[i]*2

    console.log(`\nVetor A: ${vetorA[i]}`)
    console.log(`\nVetor B: ${vetorB[i]}`)
}

    
