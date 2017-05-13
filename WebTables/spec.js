var SelectWrapper = require('./select-wrapper');

describe('WebTable functionalities', function() {
	var searchField = element(by.model('searchValue'));
	var addUserButton = element(by.partialButtonText('Add User'));
	var editButtons = element.all(by.partialButtonText('Edit'));
	var table = element.all(by.repeater('dataRow in displayedCollection'));
	var firstName = element(by.name('FirstName'));
	var lastName = element(by.name('LastName'));
	var userName = element(by.name('UserName'));
	var password = element(by.name('Password'));
	var customerRadios = element.all(by.css('[type="radio"]'));
	var selectRole = new SelectWrapper(by.name('RoleId'));
	var email = element(by.name('Email'));
	var mobile = element(by.name('Mobilephone'));
	var closeForm = element(by.css('[ng-click="close()"]'));
	var saveUser = element(by.css('[ng-click="save(user)"]'));
	


	beforeEach(function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
	});

	it('should add a new user', function() {
		addUserButton.click();
		firstName.sendKeys('Testing');
		lastName.sendKeys('Testing');
		userName.sendKeys('Test');
		password.sendKeys('Test');
		customerRadios.get(0).click();
		selectRole.selectByText('Admin');
		email.sendKeys('mail@host.com');
		mobile.sendKeys('1112223333');
		saveUser.click();
		cells = table.first().all(by.tagName('td'));
		var cellsText = cells.map(function(elm){
			return elm.getText();
		});
		var newArr = cellsText.map(function(elm){
			if (elm!="") {
				return elm;
			};
		});
		expect(newArr).toEqual(['Testing','Testing','Test','Company AAA','Admin','mail@host.com','1112223333','Edit'])
	});
});