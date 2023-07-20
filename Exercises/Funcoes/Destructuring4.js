function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] =  [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// passando o máximo e mínimo
console.log(rand([50, 40]))

// passando apenas o mínimo, assumindo o máximo como padrão para o valor estabelecido: 1000
console.log(rand([992]))

// passando apenas o máximo, assumindo o mínimo como padrão para o valor estabelecido: 0
console.log(rand([, 10]))

// passando um array vazio, assumindo o mínimo e máximo como padrão para os valores estabelecidos: 0 e 1000
console.log(rand([]))