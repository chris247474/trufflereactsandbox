pragma solidity ^0.4.11;

contract SimpleStorage {
  uint storedData;

  function set(uint x) {
    storedData = x;
  }

  function get() constant returns (uint res) {
    res = storedData;
  }

  function getDouble() constant returns (uint res) {
    res = storedData;
  }
}
