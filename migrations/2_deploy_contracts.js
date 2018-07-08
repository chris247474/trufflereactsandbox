var Strings = artifacts.require("./strings.sol");
var TxController = artifacts.require("./TxController.sol");
//var tester = artifacts.require("./TestTxController.sol");
var LifeMesh = artifacts.require("./LifeMesh.sol");
//var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Strings);
  deployer.link(Strings, LifeMesh);
  deployer.deploy(LifeMesh);
  //deployer.deploy(SimpleStorage);
  deployer.deploy(TxController, "LIFE", "LFE");
  //deployer.link(TxController, tester);
  //deployer.deploy(tester);
};