import React, { Component } from 'react'
//import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import TxControllerContract from '../build/contracts/TxController.json'
import lmDB from '../build/contracts/LifeMesh.json'
import getWeb3 from './utils/getWeb3'
import Header from './Header'
import Main from './Main'
import BottomNav from './BottomNav'
import { uPortConnect, requestCredentials } from './uport'

import { Drizzle, generateStore } from 'drizzle'

//import match from './Matcher'
//import client from './MongoHelper'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(function(err){
      console.log(err+' - Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    //const simpleStorage = contract(SimpleStorageContract)
    const txController = contract(TxControllerContract)
    txController.setProvider(this.state.web3.currentProvider)

    //simpleStorage.setProvider(this.state.web3.currentProvider)
    //const lmdb = contract(lmDB)
    //lmdb.setProvider(this.state.web3.currentProvider)

    // drizzle setup
    /*const options = {
      contracts: [
        SimpleStorage
      ]
    }
    
    const drizzleStore = generateStore(this.props.options)
    const drizzle = new Drizzle(this.props.options, drizzleStore)*/
    // drizzle setup

    // Declaring this for later so we can chain functions on SimpleStorage.
    //var simpleStorageInstance
    //var lmDBInstance
    var txControllerInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      if (error) {
          console.log(error);
      }

      txController.deployed().then((instance) => {
        console.log("TxController smart contract deployed")
        txControllerInstance = instance

        alert("TxController smart contract deployed")

        //test txController methods
        var providerOwner = "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
        var recipient = "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef"
        var parentTokenId = 0
        var proof = "ipfs"
        var tokenPoints = 1
        var soldFor = 1.124
        var soldAt = 123456

        var childTokenId = 1
        var childTokenPoints = 2

        txControllerInstance.createTx(providerOwner, recipient, parentTokenId, 
          proof, tokenPoints, soldFor, soldAt)
          .then(()=>{

            console.log("done creating parentTx, creating children")

            txControllerInstance.createChildForExistingTx(
              parentTokenId, providerOwner, childTokenId, 
              recipient, proof, childTokenPoints, soldFor, 
              soldAt)

              .then(()=>{
                console.log("done creating childTx, yay!")
              })

          })

        /*return lmDBInstance.createRecipient("w4w", "Manila", {from: accounts[0]})
        .then((result) => {
          console.log("result is "+result)
          return this.setState({ storageValue: result })
        })*/

      }).then(()=> {
        
      })
    })
  }

  render(){
    return(
      <div>
        <Header />
        <br />
        <Main />
      </div>
    );
  }
}

export default App



