var Person = artifacts.require("Person");
expect = require("chai").expect;

// Level 1: Testing the contract
contract("Testing the Person contract", function(accounts){
	// Level 2: Describing the context of the test
	describe("Deploy the Person contract", function(){
		// Level 3: Specific test for this context
		it("Get an instance of the Person contract", function(){
			// Return a promise
			return Person.new().then(function(instance){
				personContract = instance;
			});
		});
	});

	describe("Test the contract variables", function(){
		describe("Variable: name", function(){
			it("Use setName to set a first name", function(){
				return personContract.setName("Maria").then(function(response){
					expect(response).to.not.be.an("error");
				});
			});

			it("Check the first name was set properly", function(){
				return personContract.name().then(function(response){
					expect(response.toString()).to.be.equal("Maria");
				});
			});

			it("Use setName to set a second name", function(){
				return personContract.setName("Pedro").then(function(response){
					expect(response).to.not.be.an("error");
				});
			});

			it("Check the second name was set properly", function(){
				return personContract.name().then(function(response){
					expect(response.toString()).to.be.equal("Pedro");
				});
			});
		});
	});
});
