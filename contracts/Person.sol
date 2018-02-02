pragma solidity ^0.4.17;

contract Person {
	string public name;

	function setName(string _name){
		name = _name;
	}
}