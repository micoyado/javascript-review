// declarando com var
var a = 3

// declarando com let
let b = 4

var a = 30
b = 40

console.log(a, b)

// considerações: o var permite que você redeclare variáveis dentro de um mesmo escopo, declarando variáveis duas vezes
// ao contrário do let, que caso você já tenha declarado uma vez, ele informa: "Identifier 'b' has already been declared"

a = 300
b = 400

console.log (a,b)

const c = 5
// c = 50
console.log(c)

// quanto mais constantes (const) houver em seu programa, melhor será para trabalhar com ele