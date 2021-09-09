/*Leia um vetor de 40 posições e atribua valor 0 para todos os elementos que 
  possuírem valores negativos. Em Linguagem JS*/

let vetor = [1,2,3,4,5,6,7,8,9,0,-1,-9,-10,14,15,16,-17,-18,-19,-20,
            21,22,23,24,25,-26,27,28,29,30,31,32,33,34,-35,36,37,38,39,40]

console.log("VETOR")

for(let i = 0; i <= 39; i++){
    if(vetor[i] < 0){
        console.log("\nConteudo do vetor: 0") 
    }else{
        console.log(`\nConteudo do vetor: ${vetor[i]}`)
    }
}