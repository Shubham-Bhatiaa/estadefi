// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract RealFractional is ERC20, Ownable {
    address public realFiToken;
    uint256 public propertyTokenId;
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address _realFiToken,
        uint256 _propertyTokenId
    ) ERC20(name, symbol) Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
        realFiToken = _realFiToken;
        propertyTokenId = _propertyTokenId;
    }
}