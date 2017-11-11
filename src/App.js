import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import lmDB from '../build/contracts/LifeMesh.json'
import getWeb3 from './utils/getWeb3'
import Button from 'react-toolbox/lib/button/Button';

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

        // Stores a given value, 5 by default.
        /*return lmDBInstance.createRecipient("w4w", "Manila", {from: accounts[0]})
        .then((result) => {
          console.log("result is "+result)
          return this.setState({ storageValue: result })
        })*/

      })
    })
    
    //quickstart example
    /*this.state.web3.eth.getAccounts((error, accounts) => {
      if (error) {
        console.log(error);
      }

      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(30, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.getDouble()
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    }) */


  }

  state = { name: '', phone: '', email: '', hint: '' };
  
  handleChange = (value, ev) => {
    this.setState({ [ev.target.name]: value });
  };

  submit(){
    alert('submitted')
  }

  render(){
    return(
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="http://lifeme.sh" className="pure-menu-heading pure-menu-link">Lifemesh</a>
        </nav>

        <main className="container">
          
          <div className="pure-g">
            <div className="pure-u-1-1">
              <center>
                <h1>Help where it's needed</h1>
                <Button label="I need help - replace w 2 button bar thing" />
                <Button label="I want to help - put these on a type form?" />
                
              </center>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App


