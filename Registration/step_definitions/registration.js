var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function(){
  var registrationObject = require('./../support/registration_object.js')
    this.Given(/^Ingreso a la pagina del formulario de registro$/, function (callback) {
         registrationObject.navigate();
         callback();
       });
    this.Then(/^el titulo de la pagina debe ser "([^"]*)"$/, function (titulo) {
         expect(browser.getTitle()).to.eventually.equal(titulo);
       });

       this.When(/^Ingreso "([^"]*)" en campo de username$/, function (username, callback) {
         registrationObject.userName.sendKeys(username);
         callback();
       });
/*       this.Then(/^la clase del campo debe ser "([^"]*)"$/, function (clase, callback) {
        var result = registrationObject.hasClass(registrationObject.userName,clase);
        result.then(function(text){
          console.log(text)
        });
       });*/
       this.Then(/^se debe visualizar un mensaje "([^"]*)"$/, function (mensaje) {
         expect(registrationObject.getMessageText()).to.eventually.equal(mensaje);
       });
     this.When(/^Ingreso "([^"]*)" en campo de password$/, function (password, callback) {
          registrationObject.userPassword.sendKeys(password);
          callback();
        });
 /*         this.When(/^Ingreso "([^"]*)" en campo de description$/, function (descripcion, callback) {
          element(by.model('model[options.key]')).sendKeys(descripcion);
        });
        this.When(/^Selecciono en boton "([^"]*)"$/, function (boton) {
          element(by.buttonText(boton)).click();
        });
        this.Then(/^Deberia loguearme correctamente$/, function (callback) {
          expect(element(by.tagName('h1')).getText()).to.eventually.equal('Home');
        });
        this.When(/^Selecciono el link de logout$/, function () {
          element(by.tagName('a')).click();
        });
        this.Then(/^Deberia desloguearme correctamente$/, function (callback) {
          expect((by.model('model[options.key]')).getText()).to.eventually.equal('username description');
        });
        this.Then(/^se debe mostrar una alerta "([^"]*)"$/, function (alerta, callback) {
          expect(element(by.css('[ng-if="Auth.error"]')).getText()).to.eventually.equal('Username or password is incorrect');
        });*/
}