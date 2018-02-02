pragma solidity ^0.4.17;

contract Person {
	string public name;
	address public owner = msg.sender;

	modifier onlyOwner(){
		require(msg.sender == owner);
		_;
	}

	function setName(string _name) onlyOwner {
		name = _name;
	}
}