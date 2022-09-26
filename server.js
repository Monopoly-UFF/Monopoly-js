const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/', function (req, res) {
    res.send("Servidor iniciado!")
})


app.listen(port, () => {
    console.info("Rodando em http://localhost:${port} ")
})
