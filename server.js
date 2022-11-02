const express = require('express')

const app = express()
const port = process.env.PORT || 4000

const bodyParser = require('body-parser')

//EJS Como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))
//BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/', (req, res) => {
    res.render('pagina_inicial')
})
app.get('/board', (req, res) => {
    res.render('pagina_jogo')
})


app.listen(port, () => {
    console.info(`Rodando em http://localhost:${port}`)
})
