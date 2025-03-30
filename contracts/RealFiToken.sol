// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract RealFiToken is ERC721, Ownable {
    struct Property {
        string name;
        string location;
        uint256 value;
        uint256 totalFractions;
        bool isRented;
        uint256 rentalPrice;
    }
    
    mapping(uint256 => Property) public properties;
    uint256 public nextTokenId = 1;
    
    constructor() ERC721("RealFiToken", "RFT") Ownable(msg.sender) {}
    
    function mintProperty(
        string memory name,
        string memory location,
        uint256 value,
        uint256 totalFractions
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId++;
        _safeMint(msg.sender, tokenId);
        
        properties[tokenId] = Property({
            name: name,
            location: location,
            value: value,
            totalFractions: totalFractions,
            isRented: false,
            rentalPrice: 0
        });
        
        return tokenId;
    }
    
    function setRentalStatus(uint256 tokenId, bool isRented, uint256 rentalPrice) external onlyOwner {
        require(ownerOf(tokenId) != address(0), "Property does not exist");
        properties[tokenId].isRented = isRented;
        properties[tokenId].rentalPrice = rentalPrice;
    }
}