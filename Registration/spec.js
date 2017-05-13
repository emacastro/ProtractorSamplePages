describe('Registration App Form', function(){
	var userName = element(by.model('Auth.user.name'));
	var password = element(by.model('Auth.user.password'));
	var description = element(by.model('model[options.key]'));
	var message = $('[ng-message=required]');
	var hasClass = function(element, cls){
		return element.getAttribute('class').then(function(classes){
			return classes.split(' ').indexOf(cls) !== -1;
		});
	};
	var messageDescription = element(by.id('formly_1_input_username_0_description'));
	var alert = element(by.css('[ng-if="Auth.error"]'));

	beforeEach(function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/registeration')
	})

	it('should has title', function(){
		expect(browser.getTitle()).toEqual('Protractor practice website - Registration')
	})

	it('username should be green', function(){
		userName.sendKeys('test');
		expect(hasClass(userName, 'ng-valid')).toBe(true);
	})

	it('username should be red', function(){
		userName.sendKeys(' ');
		expect(hasClass(userName, 'ng-invalid')).toBe(true);
		expect(message.getText()).toEqual('You did not enter a username');
	})

	it('password should be green', function(){
		password.sendKeys('test');
		expect(hasClass(password, 'ng-valid')).toBe(true);
	})

	it('password should be red', function(){
		userName.sendKeys('angular');
		password.sendKeys('');
		expect(hasClass(password, 'ng-invalid')).toBe(true);
		expect(message.getText()).toEqual('You did not enter a password');
	})

	//Revisar
	it('username less characters', function(){
		userName.sendKeys('as');
		password.sendKeys('password');
		expect(element(by.cssContainingText('.ng-scope','Your username must be between 3 and 100 characters long')).isDisplayed()).toBeTruthy();
	})

	it('password less characters', function(){
		userName.sendKeys('angular');
		password.sendKeys('as');
		expect(element(by.cssContainingText('.ng-scope','Your password must be between 3 and 100 characters long')).isDisplayed()).toBeTruthy();
	})

	it('description valid', function(){
		description.sendKeys('test');
		expect(hasClass(description, 'ng-valid')).toBe(true);
	})

	it('description should be red', function(){
		description.sendKeys(' ');
		expect(hasClass(description, 'ng-invalid')).toBe(true);
	})

	it('should login', function(){
		userName.sendKeys('angular');
		password.sendKeys('password');
		description.sendKeys('test user');
		element(by.buttonText('Login')).click();
		expect(element(by.tagName('h1')).getText()).toBe('Home');
	})

	it('should logout', function(){
		element(by.tagName('a')).click();
		expect(messageDescription.getText()).toBe('username description');
	})

	it('should display error message', function(){
		userName.sendKeys('angular');
		password.sendKeys('asdfas');
		description.sendKeys('test user');
		element(by.buttonText('Login')).click();
		expect(alert.getText()).toBe('Username or password is incorrect');
	})

	it('should display error message', function(){
		userName.sendKeys('asdfas');
		password.sendKeys('password');
		description.sendKeys('test user');
		element(by.buttonText('Login')).click();
		expect(alert.getText()).toBe('Username or password is incorrect');
	})
})