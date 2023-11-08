Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Jennyfer')
    cy.get('#lastName').type('Gusmao')
    cy.get('#email').type('jennyzaline@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains( 'button', 'Enviar' ).click()
    cy.get('.success').should('be.visible')
})
