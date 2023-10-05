var {Web3} = require("web3")
// provider
var testnet = "https://eth-goerli.g.alchemy.com/v2/4oCX73Qmleo65zFnQkT-LK8BfWAwXTKT"
// public account
var walletAddress = "0x1157466D2Df9D52672e8a62E5e346e8d38B68b84"
// conexión
var web3 = new Web3(new Web3.providers.HttpProvider(testnet));
// obtenemos el balance
web3.eth.getBalance(walletAddress).then(i => {
    // convertimos a ether
    const etherValue = Web3.utils.fromWei(i, 'ether');
console.log(`${etherValue} ether ${i}` ) }).catch(e => {
    console.log(e)
})