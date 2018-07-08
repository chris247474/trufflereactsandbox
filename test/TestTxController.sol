pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TxController.sol";
import "../contracts/Utils.sol";

contract TestMyContract is Utils {
    
    function testContractCreated() public {
        //test txController methods
        /*string providerOwner = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
        string recipient = "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef";
        uint256 parentTokenId = 0;
        string proof = "ipfs";
        uint64 tokenPoints = 1;
        uint64 soldFor = 1.124;
        uint64 soldAt = 123456;

        uint256 childTokenId = 1;
        uint64 childTokenPoints = 2;*/

        string memory nameStr = "LIFE";
        string memory symbolStr = "LFE";
        /*bytes32 symbol = stringToBytes32("LFE");
        bytes32 name = stringToBytes32("LIFE");
        bytes32 proof = "ipfs goes here";*/

        TxController mycontract = TxController(nameStr, symbolStr);//name, symbol);
        //mycontract.createTx(this, providerOwner, 
        //0, proof, 1, 123, 1234556789);
        
        //bytes32 expected = stringToBytes32("LFE");
        bytes32 actual = stringToBytes32(mycontract.symbol());

        Assert.equal(actual, "LFE", "Symbol should be LFE");
    }
}

// Proxy contract for testing throws
contract ThrowProxy {
    address public target;
    bytes data;

    function ThrowProxy(address _target) public {
        target = _target;
    }

    //prime the data using the fallback function.
    function() public {
        data = msg.data;
    }

    function execute() public returns (bool) {
        return target.call(data);
    }
}