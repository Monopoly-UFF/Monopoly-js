const express = require('express')

const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.send("Servidor iniciado!")
})


app.listen(port, () => {
    console.log(`===>    Rodando em\n===>    http://localhost:${port}\n===>    CTRL+C para fechar!`)
})
