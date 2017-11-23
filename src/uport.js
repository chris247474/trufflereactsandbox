import { Connect, SimpleSigner, Credentials } from 'uport-connect'

/*const signer = SimpleSigner(process.env.PRIVATE_KEY)
const credentials = new Credentials({
  appName: 'Lifemesh_pre-alpha',
  address: '2ouHncTQbbwk3Lo1trwR9TTxgKgJWmotJCq',
  signer: signer,
  networks: networks
})*/

export function uPortConnect(){
  var uport = new Connect('Lifemesh_pre-alpha', {
    clientId: '2ouHncTQbbwk3Lo1trwR9TTxgKgJWmotJCq',
    network: 'rinkeby',
    signer: SimpleSigner('239097f763139604b124ce0841cecd39cdcafddb3f81a937e448a856c91e699a')
  });

  const web3 = uport.getWeb3()
  
  // Setup the simple Status contract - allows you to set and read a status string
  const abi = [{"constant":false,"inputs":[{"name":"status","type":"string"}],"name":"updateStatus","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getStatus","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}]
  
  const StatusContract = web3.eth.contract(abi);
  const statusInstance = StatusContract.at('0x70A804cCE17149deB6030039798701a38667ca3B')

  requestCredentials(uport)

  return uport
}

export function requestCredentials(uport){
  // uPort connect
  uport.requestCredentials({
    requested: ['name', 'phone', 'country'],
    notifications: true // We want this if we want to recieve credentials
  })
  .then((credentials) => {
  // Do something
    console.log("Credentials:", credentials);
    //render();
    }, (err) => {
        console.log("Error:", err);
    })
}

// Send ether
/*const sendEther = () => {
  const value = parseFloat(globalState.sendToVal) * 1.0e18

  web3.eth.sendTransaction(
    {
      to: globalState.sendToAddr,
      value: value
    },
    (error, txHash) => {
      if (error) { throw error }
      globalState.txHashSentEth = txHash
      render()
    }
  )
}*/

// Set Status
/*const setStatus = () => {
  console.log("set status here")
  const newStatusMessage = globalState.statusInput
  statusInstance.updateStatus(newStatusMessage,
    (error, txHash) => {
      if (error) { throw error }
      globalState.txHashSetStatus = txHash
      render()
      })
}*/

export default uPortConnect