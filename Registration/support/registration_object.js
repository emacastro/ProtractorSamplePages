var RegistrationObject = function(){
    this.userName = element(by.model('Auth.user.name'));
	this.userPassword = element(by.model('Auth.user.password'));
	this.description = element(by.model('model[options.key]'));
	this.message = $('[ng-message=required]');
	this.hasClass = function(element, cls){
		return element.getAttribute('class').then(function(classes){
			return classes.split(' ').indexOf(cls) !== -1;
		});
	};
	this.messageDescription = element(by.id('formly_1_input_username_0_description'));
	this.alert = element(by.css('[ng-if="Auth.error"]'));

    this.navigate = function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration');
    }

    this.getMessageText = function(){
        return this.message.getText();
    }
}

module.exports = new RegistrationObject();