Feature: Funcionalidad para registrar usuario

    Scenario: Verificacion de titulo
        Given Ingreso a la pagina del formulario de registro
        Then el titulo de la pagina debe ser "Protractor practice website - Registration"

    Scenario: Verificación de clase en campo username
        Given Ingreso a la pagina del formulario de registro
        When Ingreso "test" en campo de username
#        Then la clase del campo debe ser "ng-valid"
    
    Scenario: Campo username vacío
        Given Ingreso a la pagina del formulario de registro
        When Ingreso " " en campo de username
#        Then la clase del campo debe ser "ng-valid"
        And se debe visualizar un mensaje "You did not enter a username"

     Scenario: Verificación de clase en campo password
        Given Ingreso a la pagina del formulario de registro
        When Ingreso "test" en campo de password
#        Then la clase del campo debe ser "ng-valid"
        
    Scenario: Campo password vacío
        Given Ingreso a la pagina del formulario de registro
        When Ingreso "angular" en campo de username
        And Ingreso " " en campo de password
#        Then la clase del campo debe ser "ng-valid"
        And se debe visualizar un mensaje "You did not enter password"

#    Scenario: Verificación de clase en campo description
#        Given Ingreso a la pagina del formulario de registro
#        When Ingreso "test" en campo de description
#        Then la clase del campo debe ser "ng-valid"

#    Scenario: Campo description vacío
#        Given Ingreso a la pagina del formulario de registro
#        And Ingreso " " en campo de description
#        Then la clase del campo debe ser "ng-invalid"

#    Scenario: Login de usuario
#        Given Ingreso a la pagina del formulario de registro
#        When Ingreso "angular" en campo de username
#        And Ingreso "password" en campo de password
#        And Ingreso "test user" en campo de description
#        And Selecciono en boton "Login"
#        Then Deberia loguearme correctamente
    
#    Scenario: Deslogueo de usuario
#        Given Ingreso a la pagina del formulario de registro
#        When Ingreso "angular" en campo de username
#        And Ingreso "password" en campo de password
#        And Ingreso "test user" en campo de description
#        And Selecciono en boton "Login"
#        And Selecciono el link de logout
#        Then Deberia desloguearme correctamente

#    Scenario: Mensaje de error con password incorrecto
#        Given Ingreso a la pagina del formulario de registro
#        When Ingreso "angular" en campo de username
#        And Ingreso "asdfas" en campo de password
#        And Ingreso "test user" en campo de description
#        And Selecciono en boton "Login"
#        Then se debe mostrar una alerta "Username or password is incorrect"

#    Scenario: Mensaje de error con usuario incorrecto
#        Given Ingreso a la pagina del formulario de registro
#        When Ingreso "asdfas" en campo de username
#        And Ingreso "password" en campo de password
#        And Ingreso "test user" en campo de description
#        And Selecciono en boton "Login"
#        Then se debe mostrar una alerta "Username or password is incorrect"

