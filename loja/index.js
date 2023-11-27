const express = require('express')
const app = express()
const porta = 3000
let produtos = [
    {id: 1, nome: 'Iphone', preço: 4999.99},
    {id: 2, nome: 'Geladeira Brastemp', preço: 2843.00},
    {id: 3, nome: 'Notebook i5 16gb', preço: 3499.00}
]


app.listen(porta, () => {
    console.log(`Servidor Iniciado na porta ${porta}`)
})

app.get('/', (req, res) => {
    res.send('<p>Olá!</p>')
})

app.get('/produtos', (req, res) => {
    res.json(produtos)
})