// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./RealFiToken.sol";
import "./RealFractional.sol";
import "./SETDToken.sol";

contract EstateRegistry is Ownable {
    RealFiToken public realFiToken;
    SETDToken public setdToken;

    mapping(uint256 => address) public fractionalTokens;

    event PropertyTokenized(uint256 propertyId, address fractionalToken);
    event RentalDistributed(uint256 propertyId, uint256 amount);

    constructor(address _realFiToken, address _setdToken) Ownable(msg.sender) {
        realFiToken = RealFiToken(_realFiToken);
        setdToken = SETDToken(_setdToken);
    }

    function tokenizeProperty(
        string memory name,
        string memory location,
        uint256 value,
        uint256 totalFractions,
        string memory fractionalName,
        string memory fractionalSymbol
    ) external onlyOwner {
        uint256 propertyId = realFiToken.mintProperty(
            name,
            location,
            value,
            totalFractions
        );

        RealFractional fractionalToken = new RealFractional(
            fractionalName,
            fractionalSymbol,
            totalFractions,
            address(realFiToken),
            propertyId
        );

        fractionalTokens[propertyId] = address(fractionalToken);
        emit PropertyTokenized(propertyId, address(fractionalToken));
    }

    function distributeRental(uint256 propertyId) external onlyOwner {
    (,,,,bool isRented, uint256 rentalPrice) = realFiToken.properties(propertyId);
    require(isRented, "Property is not rented");
    
    address fractionalToken = fractionalTokens[propertyId];
    uint256 totalSupply = RealFractional(fractionalToken).totalSupply(); 
    
    setdToken.mint(address(this), rentalPrice);
    setdToken.transfer(owner(), rentalPrice);
    
    emit RentalDistributed(propertyId, rentalPrice);
}
}
