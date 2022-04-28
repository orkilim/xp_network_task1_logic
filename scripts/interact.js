const PUBLIC_KEY = "0x0492E0DA1de879fc6553548d6D05c4192a64646F"
//can add private key
const CONTRACT_ADDRESS = "0xecE2d53b1Aa833feb8498aB78fcDd341e92F3421"

const { ethers } = require("hardhat")


const contract = require("../artifacts/contracts/Moo.sol/Moo.json")

const provider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com")


const signer = new ethers.Wallet(PRIVATE_KEY, provider)

const myContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

const main = async () => {

    const gas_limit = ethers.utils.hexlify(300000)

    const txObj = {
        from: PUBLIC_KEY,
        to: CONTRACT_ADDRESS,
        value: ethers.utils.parseEther('0.03'),
        gasLimit:gas_limit,

    }
    console.log("working on it...")

    const result=await signer.sendTransaction(txObj)

    console.log("this is the result:\n",result)

}

main()
    .then(() => {
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })