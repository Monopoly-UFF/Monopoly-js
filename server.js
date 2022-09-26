const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/', function (req, res) => {
    res.send("Servidor iniciado!")
})


app.listen(port, () => {
    console.log(`===>    Rodando em\n===>    http://localhost:${port}\n===>    CTRL+C para fechar!`)
})
