# lifemesh-ethereum

LifeMesh blockchain app for Ethereum

Env Notes:
 - Python 2.7 - latest 3+ version isnt supported by dependencies (at least on my machine). 
 - yml anaconda environment file is included in root if you cant get 'npm run start' working - 'conda env create -f trufflereact_conda.yml' at root
 - index.js is the "main" file w ReactDOM.render
 - App.js has our "quickstart" layout w some sample css tinkering in the same file

 Truffle:
- truffle develop (for truffle dev console)
- compile
- migrate

 Todo:
 - figure out our css theme
 - standard testrpc scripts like we have w our hackathon proto
 - deploy lifemesh.sol to testnet
 - build out first page (accdng to Balsamiq) w proper layouts, etc

 npm run start error:
 - if you get an error that has something to do with readline module not being found in node-wit.interactive.js, then;
    - cd to this root/node_modules/node-wit
    - npm install readline

 Resources:
 - routing based on https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf, https://codesandbox.io/s/21pm1lky7r 

 - uport
 https://developer.uport.me/guides.html#install-the-library/sdk
 https://github.com/uport-project/uport-js
 https://hackmd.io/s/HyCr_66_b


- mongodb server setup
https://treehouse.github.io/installation-guides/mac/mongo-mac.html

 
