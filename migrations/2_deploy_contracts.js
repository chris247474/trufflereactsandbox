var Strings = artifacts.require("./strings.sol");
var LifeMesh = artifacts.require("./lifemesh.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Strings);
  deployer.link(Strings, LifeMesh);
  deployer.deploy(LifeMesh);
  deployer.deploy(SimpleStorage);
};