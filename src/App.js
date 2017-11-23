import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import lmDB from '../build/contracts/LifeMesh.json'
import getWeb3 from './utils/getWeb3'
import Header from './Header'
import Main from './Main'
import BottomNav from './BottomNav'
import { connect, requestCredentials } from './uport'
//var connect = require('./uport.js').connect;

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
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)
    const lmdb = contract(lmDB)
    lmdb.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance
    var lmDBInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      if (error) {
          console.log(error);
      }

      lmdb.deployed().then((instance) => {
        console.log("lifemesh smart contract deployed")
        lmDBInstance = instance

        alert("lifemesh smart contract deployed")

        /*return lmDBInstance.createRecipient("w4w", "Manila", {from: accounts[0]})
        .then((result) => {
          console.log("result is "+result)
          return this.setState({ storageValue: result })
        })*/

      }).then(()=> {
        connect.apply()//need to figure out how to use promises here
      })
    })
  }

  render(){
    return(
      <div>
        <Header />
        <br /><br /><br /><br />
        <Main />
      </div>
    );
  }
}

export default App



