/*Faça um programa que leia um vetor de vinte posições e um valor X qualquer.
    Seu programa deverá fazer uma busca do valor X no vetor e informar a(s) posição(ões)
    em que foi(ram) encontrado(s) ou a mensagem “Valor não encontrado!”. */
    
    var i;

    var valorX = prompt("Agora digite o valor X: ")
    console.log(`O valor de X é: ${valorX}\n`)

    console.log("Vetor:\n")

    for(i = 0; i < 20; i++){
        var vetor = []
        vetor[i] = prompt(`Digite o valor do vetor na posição ${i}`)
        console.log(`Posição [${i}], valor: ${vetor[i]}`)

        if(valorX == vetor[i]){
            console.log(`Valor de X encontrado na posição ${i} do vetor!: ${valorX}`)
        }else{
            console.log(`Valor de X não encontrado na posição ${i} do vetor!`)
        }
    }

    

    