describe('Checkboxes functionalities', function() {
	
	/*
	-Los siguientes checkboxes no se pueden activar
	Hammer, Blue Paint, Gearbox
	- Cuando seleccionas el check de Store, todos los checkboxes se marcan,
	lo mismo caso contrario
	- Si un check tiene un grupo interno (ejemplo Inside), al marcarlo se marcan todos los
	checks del grupo interno, mismo caso contrario. Pero tambien el titulo superior 
	cambia a un menos (-)
	Al seleccionar este menos, se vuelven a marcar todos los check que fueron desmarcados
	- 
	*/
	var storeCheck = element(by.model('data.root'));
	var divisions = element.all(by.repeater('division in data.divisions'));
	var categories = element.all(by.repeater('cat in division.categories'));
	var products = element.all(by.repeater('prod in cat.products'));
	var checkboxes = $$('[type="checkbox"]');

	var iterateInCheckboxes = function(value){
		for (var i = 0; i < value; i++) {
			showInConsole(i);
			expect(checkboxes.get(i).isSelected()).toBeFalsy()
		}
	};

	var showInConsole = function(value){
		checkboxes.get(value).isSelected().getText().then(function(text){
			console.log(text);
		});
	}

	beforeEach(function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
	});

	it('should check all checkboxes are not selected', function() {
		storeCheck.click();
		storeCheck.click();
		expect($$('[type="checkbox"]:checked').count()).toBe(0);
	});

	it('should check all checkboxes are not selected', function() {
		storeCheck.click();
		expect($$('[type="checkbox"]:checked').count()).toBe(18);
	});

	
});