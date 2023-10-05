const { Pool } = require("pg")
const express = require("express")
const {Web3} = require("web3")

const pool = new Pool({
    host: "localhost",
    port: 5454,
    user: "postgres",
    password: "123456",
    database: "postgres"
})

const WEB3_PROVIDER = "https://mainnet.infura.io/v3/5a025af92fd44a429060a3f99bbb0b67"

const web3 = new Web3(WEB3_PROVIDER)

const app = express();

app.listen(3344, '127.0.0.1')

app.get("/bdd/customers/:id", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from customerS where customer_id = $1", [req.params.id])
        res.send(respuesta.rows)
    } catch (error) {
        res.send(error)
    }
})

app.get("/web3/balance/:adress", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.adress)
        res.send(balance)
    } catch (error) {
        res.send(error)
    }
})
