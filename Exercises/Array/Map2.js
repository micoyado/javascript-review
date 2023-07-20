const carrinhoNomes = ['Borracha', 'Caderno', 'Kit de Lapis', 'Caneta']
const carrinhoValores = [3.45, 13.90, 41.22, 7.50]

console.log(carrinhoNomes, carrinhoValores)

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)