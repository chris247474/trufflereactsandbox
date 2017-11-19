import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import lmDB from '../build/contracts/LifeMesh.json'
import getWeb3 from './utils/getWeb3'
import Header from './Header'
import Main from './Main'
import BottomNav from './BottomNav'

import { Connect, SimpleSigner } from 'uport-connect'

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
    .catch(() => {
      console.log('Error finding web3.')
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

    //instantiate uport Connect object - probably need to modularize this
    var uportconnect = window.uportconnect
    const uport = new Connect('LifeMesh', {
      clientId: '2oq3fdbGXYkWmotZ43TPksn62wK9NmtJYkE',
      network: 'rinkeby or ropsten or kovan',
      signer: SimpleSigner('d09a3c03b60a6a922f27352ffbcac797098cb2ae874f1e6811c3d9d1a9dfcf99')
    })

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance
    var lmDBInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      if (error) {
          console.log(error);
      }

      /*lmdb.deployed().then((instance) => {
        console.log("lifemesh smart contract deployed")
        lmDBInstance = instance

        return lmDBInstance.createRecipient("w4w", "Manila", {from: accounts[0]})
        .then((result) => {
          console.log("result is "+result)
          return this.setState({ storageValue: result })
        })

      })*/
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



