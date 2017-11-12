import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import lmDB from '../build/contracts/LifeMesh.json'
import getWeb3 from './utils/getWeb3'
import styled, { injectGlobal } from 'styled-components'
import { Button } from 'react-bootstrap';

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

        return lmDBInstance.createRecipient("w4w", "Manila", {from: accounts[0]})
        .then((result) => {
          console.log("result is "+result)
          return this.setState({ storageValue: result })
        })

      })
    })
  }

  state = { name: '', phone: '', email: '', hint: '' };
  
  handleChange = (value, ev) => {
    this.setState({ [ev.target.name]: value });
  };

  submit(){
    alert('Hold on Lifemesh isnt done yet')
  }

  render(){
    return(
      <div>
      <Container>
        <Header>
          <H1>Help where it's needed</H1>
        </Header>
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block>I need help</Button>
          <Button bsSize="large" block>I want to help</Button>
        </div>
      </Container>
      
      </div>
    );
  }
}

export default App

const wellStyles = { maxWidth: 1000, margin: '0 auto 10px' };

const helpButtons = (
  <div className="well" style={wellStyles}>
    <Button bsSize="large" block>Block level button</Button>
    <Button bsSize="large" block>Block level button</Button>
  </div>
);

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Header = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const H1 = styled.h1`
color: #ead7d7;
font-size: 100px;
margin-bottom: -20px;
`;

const H2 = styled.h2`
color: #d2bebe;
font-size: 35px;
`;

const StyledContainer = styled.section`
background: #fff;
position: relative;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const InputText = styled.input`
padding: 16px 16px 16px 60px;
border: none;
background: rgba(0, 0, 0, 0.003);
box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
width: 440px;
position: relative;
margin: 0;
font-size: 24px;
font-family: inherit;
font-weight: inherit;
line-height: 1.4em;
&:focus {
  outline: none;
}
`;

const List = styled.ul`
width: 440px;
margin: 0;
padding: 0;
list-style: none;
`;

const TodoItem = styled.li`
position: relative;
font-size: 24px;
border-bottom: 1px solid #ededed;
&:last-child {
  border-bottom: none;
}
`;

const ItemLabel = styled.label`
white-space: pre-line;
word-break: break-all;
padding: 15px 60px 15px 15px;
margin-left: 45px;
display: block;
line-height: 1.2;
transition: color 0.4s;
`;



const Btn = styled.button`
margin: 0;
padding: 0;
border: 0;
background: none;
font-size: 50%;
vertical-align: baseline;
font-family: inherit;
font-weight: inherit;
color: inherit;
appearance: none;
font-smoothing: antialiased;
outline: none;
`;

const StyledBtn = styled(Btn)`
position: relative;
top: 0;
right: -50px;
bottom: 0;
width: 80px;
height: 25px;
margin: auto 0;
font-size: 25px;
color: #cc9a9a;
margin-bottom: 11px;
transition: color 0.2s ease-out;
cursor: pointer;
`;

const PendingContainer = styled.div`
position: fixed;
top: 0;
right: 0;
`;

const Pending = styled.div`
color: ${props => props.active ? props.activeColor || 'red' : '#c7c7c7'};
`;

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  background-color: whitesmoke;
  font-family: 'Roboto', sans-serif;
}
`