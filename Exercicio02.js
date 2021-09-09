/*2) Leia  um vetor de 10 posições e informe em que posição o usuário digitou o valor zero. Em Linguagem JS.*/

let vetor = []

for(let i = 0; i < 10; i++){
    vetor[i] = prompt("Digite os valores do vetor: ")
}

for(let i = 0; i < 10; i++){
    if(vetor[i] == 0){
        console.log(`Foi digitado 0 na posição "${i}" do vetor`)
    }else{
        console.log(`Posição do vetor "${i}", valor: ${vetor[i]}`)
    }
}