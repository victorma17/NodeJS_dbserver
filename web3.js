const express = require("express")
const { Web3 } = require("web3")


const WEB3_PROVIDER = "https://mainnet.infura.io/v3/5a025af92fd44a429060a3f99bbb0b67"


const web3 = new Web3(WEB3_PROVIDER)

const app = express();

app.listen(3344, '127.0.0.1')

app.get("/balance/:address", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.address)
        const balanceEth = parseFloat(balance) / 1e18
        res.send(balanceEth.toString())
    } catch (error) {
        res.status(500).send(error)
    }
})
