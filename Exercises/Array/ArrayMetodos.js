//usando o 'pop' para tirar o último elemento do array
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

//usando o 'push' para adicionar um elemento no fim do array
pilotos.push('Verstappen')
console.log(pilotos)

//usando o 'shift' para remover o primeiro elemento do array
pilotos.shift()
console.log(pilotos) //vettel foi embora!

//usando o 'unshift' para adicionar um elemento no começo do array
pilotos.unshift('Hamilton')
console.log(pilotos)

//usando o splice para adicionar elementos do array
//lembrando que o array é contado a partir do zero!
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

//usando o splice para remover elementos do array
pilotos.splice(3, 1) //massa quebrou 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array gerado a partir do método 'slice'
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)