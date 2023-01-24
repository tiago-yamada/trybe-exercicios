let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

meuArray = []
//criando um array vazio
for(let index = 0; index <= 25; index += 1){
    meuArray.push(index);
    //.push "enfia" o numero atual "index" dentro do "meuArray"
}
console.log(meuArray)

for(let index2 = 0; index2 < meuArray.length; index2 += 1){
    console.log(meuArray[index2] / 2);
}
// index = variavel 0 pq 0 é onde começa o array.
// for(let index = 0; index < numbers.length; index +=1){
//     console.log(numbers[index])
// }
// let result = 0;
// for(let index = 0; index < numbers.length; index +=1){
//     //depois de percorrer o array, ele incrementa "+=" o numero do array atual (percorrendo) e coloca dentro de 'result'.
//     //primeiro numero do result = 0, primeira rodada, pega o 5 do array -> 0+5. Segunda rodada -> 0+5+9 e assim por diante
//     result += numbers[index];
// }
// let average = result / numbers.length
// if (average > 20) {
//     console.log ('valor maior que 20')
// } else{
//     console.log ('valor menor que 20')
// }
// //para saber o maior valor de um array, precisamos criar uma variavel "higherNumber" para guardar esse valor.
// let higherNumber = numbers[0]
// //higherNumber = primeira posição do array
// for(let index = 0; index < numbers.length; index +=1){
//     //no for, podemos colocar pra começar da posição 0 como da 1, ja que o valor da 0 ja esta contido na variavel higherNumber
//     if(numbers[index] > higherNumber){
//         higherNumber = numbers[index];
//     }
//     //esse if verifica -> O número que estou no array é maior que o guardado na minha variavel higherNumber? Caso sim, altere o valor da variavel
//     //para este numero. Se nao for maior, ele ira ignorar o if e voltara a executar o for
// }
//Descubra quantos valores ímpares existem no array e imprima o resultado.
//criar variavel para guardar o resultado se é impar ou nao
// let impar = 0
// for(let index = 0; index < numbers.length; index +=1){
//     if(numbers[index] % 2 !== 0){
//         //este if, "tira" 2 do numero do array atual pra ver quanto sobra. Se for um numero diferente de 0, quer dizer que é impar. 
//         impar += 1;
//         //O exercicio pediu para saber QUANTOS numeros impares tem no array e nao QUAIS numeros sao impares, ou seja, incrementa pra contar quantos tem mesmo.
//     }
// }
// if(impar === 0){
//     console.log('Não tem impar')
// } else{
//     console.log(impar)
// }
// let lowestNumber = numbers[0]

// for(let index = 0; index < numbers.length; index +=1){
//     if(numbers[index] < lowestNumber){
//         lowestNumber = numbers[index]
//     }
// }
// console.log (lowestNumber)
// console.log(result);
// //caso queira guardar o valor da média crie um let average = result / numbers.length
// console.log(result / numbers.length)
// console.log(higherNumber)