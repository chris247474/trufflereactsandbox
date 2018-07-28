import React, { Component } from 'react'
//import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
//import TxControllerContract from './TxController.json'
//import getWeb3 from './utils/getWeb3'
import Header from './Header'
import Main from './Main'
/*import BottomNav from './BottomNav'
import { uPortConnect, requestCredentials } from './uport'

import { Drizzle, generateStore } from 'drizzle'*/

//import match from './Matcher'
//import client from './MongoHelper'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

var Web3 = require('web3');
var lifeETHAddress = "0x47D52d38CB464CA6b3a3c17E97BCf02Fd25618d1";
var abi = [{ "constant":true, "inputs":[ { "name":"_interfaceId", "type":"bytes4" } ], "name":"supportsInterface", "outputs":[ { "name":"", "type":"bool" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[], "name":"name", "outputs":[ { "name":"", "type":"string" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getApproved", "outputs":[ { "name":"", "type":"address" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":false, "inputs":[ { "name":"_to", "type":"address" }, { "name":"_tokenId", "type":"uint256" } ], "name":"approve", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }, { "constant":true, "inputs":[], "name":"totalSupply", "outputs":[ { "name":"", "type":"uint256" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[], "name":"InterfaceId_ERC165", "outputs":[ { "name":"", "type":"bytes4" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":false, "inputs":[ { "name":"_from", "type":"address" }, { "name":"_to", "type":"address" }, { "name":"_tokenId", "type":"uint256" } ], "name":"transferFrom", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }, { "constant":true, "inputs":[ { "name":"_owner", "type":"address" }, { "name":"_index", "type":"uint256" } ], "name":"tokenOfOwnerByIndex", "outputs":[ { "name":"", "type":"uint256" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":false, "inputs":[ { "name":"_from", "type":"address" }, { "name":"_to", "type":"address" }, { "name":"_tokenId", "type":"uint256" } ], "name":"safeTransferFrom", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getSellDate", "outputs":[ { "name":"", "type":"uint64" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getChildren", "outputs":[ { "name":"", "type":"uint256[]" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"exists", "outputs":[ { "name":"", "type":"bool" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_index", "type":"uint256" } ], "name":"tokenByIndex", "outputs":[ { "name":"", "type":"uint256" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getTokenPoints", "outputs":[ { "name":"", "type":"uint64" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getProvider", "outputs":[ { "name":"", "type":"address" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getStatus", "outputs":[ { "name":"", "type":"string" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"ownerOf", "outputs":[ { "name":"", "type":"address" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getRecipient", "outputs":[ { "name":"", "type":"address" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_owner", "type":"address" } ], "name":"balanceOf", "outputs":[ { "name":"", "type":"uint256" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[], "name":"symbol", "outputs":[ { "name":"", "type":"string" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":false, "inputs":[ { "name":"_to", "type":"address" }, { "name":"_approved", "type":"bool" } ], "name":"setApprovalForAll", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }, { "constant":false, "inputs":[ { "name":"_from", "type":"address" }, { "name":"_to", "type":"address" }, { "name":"_tokenId", "type":"uint256" }, { "name":"_data", "type":"bytes" } ], "name":"safeTransferFrom", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getSellPrice", "outputs":[ { "name":"", "type":"uint64" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"tokenURI", "outputs":[ { "name":"", "type":"string" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":false, "inputs":[ { "name":"_parentTokenId", "type":"uint256" }, { "name":"_childTokenId", "type":"uint256" } ], "name":"addChildToParent", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }, { "constant":true, "inputs":[ { "name":"_owner", "type":"address" }, { "name":"_operator", "type":"address" } ], "name":"isApprovedForAll", "outputs":[ { "name":"", "type":"bool" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "inputs":[ { "name":"_name", "type":"string" }, { "name":"_symbol", "type":"string" } ], "payable":false, "stateMutability":"nonpayable", "type":"constructor" }, { "anonymous":false, "inputs":[ { "indexed":true, "name":"_from", "type":"address" }, { "indexed":true, "name":"_to", "type":"address" }, { "indexed":true, "name":"_tokenId", "type":"uint256" } ], "name":"Transfer", "type":"event" }, { "anonymous":false, "inputs":[ { "indexed":true, "name":"_owner", "type":"address" }, { "indexed":true, "name":"_approved", "type":"address" }, { "indexed":true, "name":"_tokenId", "type":"uint256" } ], "name":"Approval", "type":"event" }, { "anonymous":false, "inputs":[ { "indexed":true, "name":"_owner", "type":"address" }, { "indexed":true, "name":"_operator", "type":"address" }, { "indexed":false, "name":"_approved", "type":"bool" } ], "name":"ApprovalForAll", "type":"event" }, { "constant":false, "inputs":[ { "name":"_providerOwner", "type":"address" }, { "name":"_recipient", "type":"address" }, { "name":"_tokenId", "type":"uint256" }, { "name":"proof", "type":"string" }, { "name":"tokenPoints", "type":"uint64" }, { "name":"soldFor", "type":"uint64" }, { "name":"soldAt", "type":"uint64" } ], "name":"createTx", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }, { "constant":true, "inputs":[ { "name":"_tokenId", "type":"uint256" } ], "name":"getTokenUri", "outputs":[ { "name":"", "type":"string" } ], "payable":false, "stateMutability":"view", "type":"function" }, { "constant":false, "inputs":[ { "name":"_tokenId", "type":"uint256" }, { "name":"_childTokenId", "type":"uint256" }, { "name":"_providerOwner", "type":"address" }, { "name":"_recipient", "type":"address" }, { "name":"proof", "type":"string" }, { "name":"tokenPoints", "type":"uint64" }, { "name":"soldFor", "type":"uint64" }, { "name":"soldAt", "type":"uint64" } ], "name":"createChildForExistingTx", "outputs":[], "payable":false, "stateMutability":"nonpayable", "type":"function" }];
var web3 = new Web3('http://127.0.0.1:7545');

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

    this.instantiateContract()

    /*getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(function(err){
      console.log(err+' - Error finding web3.')
    })*/
  }

  instantiateContract() {
    let tokenId = 0;
    let providerOwnerAddress = '0x10d7f73ddde1ed4281c7f4c11d1556daef492b26';
    let recipientAddress = '0xbd48ded0b451466f8c00bd1f35babdb08650d794';
    let tokenUri = "tokenid0proof";
    let tokenPoints = 1;
    let soldFor = 2;
    let soldAt = 1;

    let childTokenId = 1;
    let childProviderOwnerAddress = '0x10d7f73ddde1ed4281c7f4c11d1556daef492b27';
    let childRecipientAddress = '0xbd48ded0b451466f8c00bd1f35babdb08650d795';
    let childTokenUri = "tokenid1proof";
    let childTokenPoints = 10;
    let childSoldFor = 20;
    let childSoldAt = 10;

    web3.eth.getAccounts((error, accounts) => {
      if (error) {
        console.log(error);
      }

      var lifeContract = new web3.eth.Contract(abi, lifeETHAddress, {
          from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',//'0x1234567890123456789012345678901234567891', // default from address
          gasPrice: '20000000000', // default gas price in wei, 20 gwei in this case
          //jsonInterface: abi
      });

      console.log("instantiated contract: ", lifeContract);

      lifeContract.methods.createTx(providerOwnerAddress, recipientAddress, tokenId, tokenUri, tokenPoints, soldFor, soldAt)
      /*.send({from: accounts[0]}, function(error, txHash) {
        if(error) {
          console.log("createTx error ", error);
        } else {
          console.log("createTx: ", txHash)

          lifeContract.methods.exists(tokenId).call({from:accounts[0]}, function(error, result){
            if(error){
              console.log("exists method error: ", error);
            } else{
              console.log("fetched method res: ", result);
            }
          });
        }
      });*/
      .send({from: accounts[0]})
      .then(function(receipt){
        console.log("createTx: receipt ", receipt);

        //doesnt work
        lifeContract.methods.exists(tokenId)
        .call({from:accounts[0]}, function(error, result){
          if(error){
            console.log("exists method error: ", error);
          } else{
            console.log("fetched method res: ", result);
          }
        });
      });
      
      
      /*.then(function(name) {
        console.log("fetched method res: ", name);
      })*/
      
    });

    

    /*lifeContract.methods.createTx(providerOwnerAddress, recipientAddress, tokenId, tokenUri, tokenPoints, soldFor, soldAt)
    .call({from: lifeETHAddress}) //send doesnt work
    .on('transactionHash', function(hash){
        console.log("createTx on transactionHash")
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log("createTx on confirmation")

        lifeContract.methods.getTokenUri(tokenId)
        .call({from: lifeETHAddress})
        .then(function(result){
            console.log("exists: ", result)
        });
    })
    .on('receipt', function(receipt){
        console.log("createTx on receipt: ", receipt)
    })
    .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.
    */

    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    /*const contract = require('truffle-contract')
    const txController = contract(TxControllerContract)
    console.log(web3)
    txController.setProvider(web3.providers.HttpProvider)

    // Get accounts.
    web3.eth.getAccounts((error, accounts) => {
      if (error) {
          console.log(error);
      }

      let tokenId = 0;
      let providerOwnerAddress = 0x10d7f73ddde1ed4281c7f4c11d1556daef492b26;
      let recipientAddress = 0xbd48ded0b451466f8c00bd1f35babdb08650d794;
      let tokenUri = "tokenid0proof";
      let tokenPoints = 1;
      let soldFor = 2;
      let soldAt = 1;

      let childTokenId = 1;
      let childProviderOwnerAddress = 0x10d7f73ddde1ed4281c7f4c11d1556daef492b27;
      let childRecipientAddress = 0xbd48ded0b451466f8c00bd1f35babdb08650d795;
      let childTokenUri = "tokenid1proof";
      let childTokenPoints = 10;
      let childSoldFor = 20;
      let childSoldAt = 10;

      //console.log(txController);

      txController.deployed().then(function(instance) {
          //console.log(instance);
          instance.createTx(providerOwnerAddress, recipientAddress, tokenId, tokenUri, tokenPoints, soldFor, soldAt);
          return instance;//instance.exists(0).call(accounts[0]);
      }).then(function(instanceRes) {
          console.log("   createTx called");//, exists);
          return instanceRes.getTokenUri(0);//.call(accounts[0]);
      }).then(function(uri) {
          console.log("   uri result is: ", uri, ". tokenUri is ", tokenUri);
          //assert.equal(uri, tokenUri, "tokenUri result was not the same: " + uri);
      });
    })*/
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



