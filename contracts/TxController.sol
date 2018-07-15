pragma solidity ^0.4.24;
//pragma experimental ABIEncoderV2;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "./strings.sol";
//import "./Utils.sol";

//follows https://www.lucidchart.com/documents/edit/4668683a-2c2b-46e3-bd3f-2a99e759a800/0
contract TxController is ERC721Token {
    
    struct Tx {
        string _providerOwner;
        string _recipient;
        uint256 _tokenId;
        string proof;
        uint64 tokenPoints;
        uint64 soldFor;
        uint64 soldAt;
    }
    
    /**
    * @dev Constructor function
    */
    constructor (string _name, string _symbol) {
        name_ = _name;
        symbol_ = _symbol;
    }
    
    //datetime as string for soldAt param?
    function createTx(string _providerOwner, string _recipient, uint256 _tokenId, string proof, uint64 tokenPoints, uint64 soldFor, uint64 soldAt) public {
        /*address providerOwnerStr = bytes32ToAddress(stringToBytes32(_providerOwner));
        address recipientStr = bytes32ToAddress(stringToBytes32(_recipient));
        
        _mint(providerOwnerStr, _tokenId);
        
        ownerProviders[_tokenId] = providerOwnerStr;
        recipients[_tokenId] = recipientStr;
        
        _setTokenURI(_tokenId, proof);
        setTokenPoints(_tokenId, tokenPoints);
        setSellPrice(_tokenId, soldFor);
        setSellDate(_tokenId, soldAt);*/
    }
    
    //mapping from parent Transaction tokenid to all child Transaction tokenids
    mapping (uint256 => uint[]) internal childTokenIds;
    
    function getChildren(uint256 _tokenId) public view returns (uint[]) {
        require(exists(_tokenId));
        return childTokenIds[_tokenId];
    }
    function createChildForExistingTx(uint256 _tokenId, string _providerOwner, uint256 _childTokenId, string _recipient, string proof, uint64 tokenPoints, uint64 soldFor, uint64 soldAt) internal {
        require(exists(_tokenId));
        
        createTx(_providerOwner, _recipient, _childTokenId, proof, tokenPoints, soldFor, soldAt);
        addParentToChild(_tokenId, _childTokenId);
        childTokenIds[_tokenId].push(_childTokenId);
    }
    /*function createChildrenForExistingTx(uint256 _tokenId, Tx[] childrenTxs) public {
        require(exists(_tokenId));
        
        //divide token points here or in webapp?
        
        for(uint256 c = 0;c < childrenTxs.length;c++){
            createTx(childrenTxs[c]._providerOwner, childrenTxs[c]._recipient, childrenTxs[c]._tokenId, childrenTxs[c].proof, childrenTxs[c].tokenPoints, childrenTxs[c].soldFor, childrenTxs[c].soldAt);
            addParentToChild(_tokenId, childrenTxs[c]._tokenId);
            childTokenIds[_tokenId].push(childrenTxs[c]._tokenId);
        }
    }*/
    function addChildToParent(uint256 _parentTokenId, uint256 _childTokenId) internal {
        require(exists(_parentTokenId) && exists(_childTokenId));
        childTokenIds[_parentTokenId].push(_childTokenId);
    }

    //mapping from tokenid to tokenPoint measure
    mapping (uint256 => uint64) internal tokenPoints;
    
    function getTokenPoints(uint256 _tokenId) public view returns (uint64) {
        require(exists(_tokenId));
        return tokenPoints[_tokenId];
    }
    function setTokenPoints(uint256 _tokenId, uint64 points) internal {
        require(exists(_tokenId));
        tokenPoints[_tokenId] = points;
    }
    
    //mapping of tokenIds to address of recipient (LGU/need poster)
    mapping (uint256 => address) internal recipients;
    
    function getRecipient(uint256 _tokenId) public view returns (address) {
        require(exists(_tokenId));
        return recipients[_tokenId];
    }
    
    //mapping of tokenIds to address of provider/entity making the offer to the recipient
    mapping (uint256 => address) internal ownerProviders;
    //mapping of tokenIds to parent tokenid if ownerProvider is null/unassigned
    mapping (uint256 => uint) internal parentTokenIds;
    
    function getParent(uint256 _tokenId) public view returns (address) {
        require(exists(_tokenId));
        //if ownerProvider is unassigned/null, then return parentTokenId
        return ownerProviders[_tokenId];
    }
    function addParentToChild(uint256 _parentTokenId, uint256 _childTokenId) internal {
        require(exists(_parentTokenId));
        require(exists(_childTokenId));
        
        parentTokenIds[_childTokenId] = _parentTokenId;
    }
    
    //tokenUris represent ipfs proofs
    
    //mapping of tokenIds to tokenid status (enum)
    mapping(uint256 => string) internal statuses;
    
    function getStatus(uint256 _tokenId) public view returns (string) {
        require(exists(_tokenId));
        return statuses[_tokenId];
    }
    function setStatus(uint256 _tokenId, string _status) internal {
        require(exists(_tokenId));
        statuses[_tokenId] = _status;
    }
    
    //mapping of tokenIds to eth value tokenId was sold for
    mapping(uint256 => uint64) internal sellPrices;
    
    function getSellPrice(uint256 _tokenId) public view returns (uint64) {
        require(exists(_tokenId));
        return sellPrices[_tokenId];
    }
    function setSellPrice(uint256 _tokenId, uint64 sellPrice) internal {
        require(exists(_tokenId));
        sellPrices[_tokenId] = sellPrice;
    }
    
    //mapping of tokenIds to datetime tokenId was sold
    mapping(uint256 => uint64) internal sellDates;
    
    function getSellDate(uint256 _tokenId) public view returns (uint64) {
        require(exists(_tokenId));
        return sellDates[_tokenId];
    }
    function setSellDate(uint256 _tokenId, uint64 sellDate) internal {
        require(exists(_tokenId));
        sellDates[_tokenId] = sellDate;
    }
}

