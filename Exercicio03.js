/*Leia um vetor de 20 posições e conte e escreva todos os valores acima de dez. Em Linguagem JS */

let vetor = [1,2,3,4,5,6,7,8,9,10,11,-4,-5,-8,15,1,-10,-8,29,17]

for(let i = 0; i < 20; i++){
    if(vetor[i] > 10){
        console.log(`Numeros maiores que 10 no vetor: ${vetor[i]}`)
    }
}