const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
const porta = 3000
let produtos = [
    {id: 1, nome: 'Iphone', preco: 4999.99},
    {id: 2, nome: 'Geladeira Brastemp', preco: 2843.00},
    {id: 3, nome: 'Notebook i5 16gb', preco: 3499.00}
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

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    let prod = produtos.find(pr => pr.id == id)
    if (prod) {
        res.json(prod)
    } else {
        res.json({})
    }
})

app.get('/produtos/:id/preco', (req, res) => {
    const id = req.params.id
    let prod = produtos.find(pr => pr.id == id)
    if (prod) {
        res.json(prod.preco)
    } else {
        res.json({})
    }
})