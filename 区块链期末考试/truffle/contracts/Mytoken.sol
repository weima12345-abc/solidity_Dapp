

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

 
import "../contracts copy/token/ERC20/ERC20.sol";
contract MyToken is ERC20 {
    constructor () ERC20("dai", "dai") {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 100 * 10**uint(decimals()));
    }
    function getDEcimals() public view returns (uint){
        return  decimals();
    }
}

