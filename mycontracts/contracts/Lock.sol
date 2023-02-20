// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.6.0/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";

contract RainbowKitNFT is ERC1155, Ownable {
    uint256 public totalSupply;

    constructor() ERC1155("https://rainbowkit-mint-nft-demo.vercel.app/nft.json") {}

    function mint() public {
        unchecked {
            ++totalSupply;
        }
        _mint(msg.sender, 1, 1, "");
    }
}
