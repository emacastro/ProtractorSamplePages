describe('Multiform funcionalities', function() {
	var name = element(by.model('formData.name'));
	var email = element(by.model('formData.email'));
	var nextSection = element(by.partialLinkText('Next Section'));
	var radios = element.all(by.model('formData.type'));
	var submit = element(by.buttonText('Submit'));
	var output = element(by.css('.ng-binding'));
	var profile = element(by.partialLinkText('PROFILE'));
	var interest = element(by.partialLinkText('INTERESTS'));
	var payment = element(by.partialLinkText('PAYMENT'));

	var hasClass = function(element, cls){
    return element.getAttribute('class').then(function(classes){
      return classes.split(' ').indexOf(cls) !== -1;
    	});
  	};

	var containingText = function(element, value){
		//var beforeText = output.getText();
		if (output.getText().toContain('{}')) {
			return '{"'+element+'":"'+value+'"}';
		}
		else
		{
			return output.getText()+',{"'+element+'":"'+value+'"}';
		}
		
	}

	beforeEach(function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/');
	});

	it('should display name in output', function() {
			var text = 'Hello';
			name.sendKeys(text);
			//expect(output.getText()).toContain(containingText("name",text));
			expect(output.getText()).toContain(text);
	});

	it('should display email in output', function() {
			var text = 'email';
			email.sendKeys(text);
			expect(output.getText()).toContain(text);
	});

	it('should continue to Interest', function() {
		var text = 'Hello';
		name.sendKeys(text);
		email.sendKeys(text);
		nextSection.click();
		expect(hasClass(interest,'active')).toBe(true);
	});

	it('should display xbox in output', function() {
		var text = 'Hello';
		name.sendKeys(text);
		email.sendKeys(text);
		nextSection.click();
		radios.first().click();
		expect(output.getText()).toContain('xbox');
	});

	it('should display ps in output', function() {
		var text = 'Hello';
		name.sendKeys(text);
		email.sendKeys(text);
		nextSection.click();radios.last().click();
		
		expect(output.getText()).toContain('ps');
	});

	it('should continue to Payment', function() {
		var text = 'Hello';
		name.sendKeys(text);
		email.sendKeys(text);
		nextSection.click();
		radios.first().click();
		nextSection.click();
		expect(hasClass(payment,'active')).toBe(true);
	});

	it('should display message', function() {
		var text = 'Hello';
		name.sendKeys(text);
		email.sendKeys(text);
		nextSection.click();
		radios.first().click();
		nextSection.click();
		submit.click();
		var alertDialog = browser.switchTo().alert();
		expect(alertDialog.getText()).toEqual("awesome!");
	});

});