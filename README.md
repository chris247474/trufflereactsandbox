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

 Resources:
 - routing based on https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf, https://codesandbox.io/s/21pm1lky7r 

 - uport
 https://developer.uport.me/guides.html#install-the-library/sdk
 https://github.com/uport-project/uport-js
 https://hackmd.io/s/HyCr_66_b
 
