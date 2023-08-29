Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Luccas')
    cy.get('#lastName').type('Miguel')
    cy.get('#email').type('luccas@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('.button', 'Enviar').click()
})