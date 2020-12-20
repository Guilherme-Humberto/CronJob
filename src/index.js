const express = require("express")
const app = express()
const { managerJobs } = require("./jobs/manager")

app.listen(3333, () => {
    console.log("Rodando na porta 3333")
    managerJobs()
})