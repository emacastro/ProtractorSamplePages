var SelectWrapper  = require('./select-wrapper');

describe('Calculator functionalities', function() {
	var firstNumber = element(by.model('first'));
	var operator = element(by.model('operator'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var result = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));
	var firstRow = element(by.repeater('result in memory').row(0));

	
	var selectOperator = new SelectWrapper(by.model('operator'));
	

	beforeEach(function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	});

	var operation = function(num1, num2, operator){
		var op;
		switch(operator){
			case 'add': op = '+';
			break;
			case 'decrease': op = '-';
			break;
			case 'multiply': op = '*';
			break;
			case 'divide': op = '/';
			break;
			case 'porcent': op = '%';
			break;
		}
		firstNumber.sendKeys(num1);
	    secondNumber.sendKeys(num2);
	    selectOperator.selectByText(op);
	    goButton.click();
	};


	it('should add one and two', function() {
	    operation(1,2,'add');
	    expect(element(by.binding('latest')).getText()).toEqual('3');
  });

	it('should display history', function() {
		operation(2,3,'add');
		expect(history.count()).toBe(1);
	});

	/*it('should match elements in history', function() {
		add(3,4);
		firstRow.element(by.binding('result.first')).getText().then(function(first){
			expect(first).toMatch(firstNumber.getText());
		});
		firstRow.element(by.binding('result.second')).getText().then(function(second){
			expect(second).toMatch(secondNumber.getText());
		});
		firstRow.element(by.binding('result.value')).getText().then(function(value){
			expect(value).toMatch(result.getText());
		});
		firstRow.element(by.binding('result.operator')).getText().then(function(op){
			expect(op).toContain(selectOperator.getSelectedOptions().first().getText());
		});
	});*/

	it('should decrease', function() {
		operation(2,1,'decrease');
	    expect(element(by.binding('latest')).getText()).toEqual('1');
	});

	it('should multiply', function() {
		operation(2,4,'multiply');
	    expect(element(by.binding('latest')).getText()).toEqual('8');
	});

	it('should divide', function() {
		operation(9,3,'divide');
	    expect(element(by.binding('latest')).getText()).toEqual('3');
	});

	it('should porcent', function() {
		operation(4,2,'porcent');
	    expect(element(by.binding('latest')).getText()).toEqual('0');
	});

	it('should display NaN', function() {
		operation('','','add');
		expect(result.getText()).toEqual('NaN');
	});
});