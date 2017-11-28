
import React, { Component } from 'react'
let Wit = require('node-wit').Wit
let interactive = require('node-wit').interactive
let log = require('node-wit').log
const WIT_ACCESS_TOKEN = 'YHSCOXW45EULTNVTYBGSPCVLETQREGXU'

export function match(need, offer){
    console.log('match called')
    
    const client = new Wit({
        accessToken: WIT_ACCESS_TOKEN,
        logger: new log.Logger(log.DEBUG) // optional
      });

    interactive(client);
    
    console.log("about to send message to WITAI")
    //test
    client.message('They need 3000 sqm of new land to relocate to, 400 meters of metal, 4 piles of cars', {})
    .then((data) => {
      console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
      alert('Yay, got Wit.ai response: ' + JSON.stringify(data));
    })
    .catch(console.error);

    //return (provider, recipient)
}

export default match