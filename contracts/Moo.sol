//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Moo is ERC20 {

    address owner;

    constructor() ERC20("MooToken", "MOO") {
        owner = msg.sender;
        _mint(address(this), 1000000 ether);
    }

    function getContractBalance() public view returns(uint256){
        return address(this).balance;
    }

    function buyToken() payable public {
        uint256 amountTobuy = msg.value;
        uint256 myBalance = address(this).balance;
        require(amountTobuy > 0, "You need to send some ether");
        require(amountTobuy <= myBalance, "Not enough tokens in the reserve");
        _transfer(address(this), msg.sender, amountTobuy);
        //emit Bought(amountTobuy);
    }


}