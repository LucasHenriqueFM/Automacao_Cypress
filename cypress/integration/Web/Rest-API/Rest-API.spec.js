Given('que estou dentro do site "restful api"', () => {
  cy.visit('https://restful-api.dev/',{ timeout: 10000 }).title().should('eq', 'REST API - ready to use');
});

When('clicar no botão "Privacy Plicy"', () => {
  cy.contains('Privacy Policy',{ timeout: 20000 }).should('be.visible').click()
  //cy.contains('Privacy Policy').should('be.visible')
  //cy.get(':nth-child(2) > .menu-link',{ timeout: 10000 }).should('be.visible').click()
});

And('clicar no botão "Contact"', () =>{
  cy.contains('Privacy Policy').should('be.visible')
  cy.get(':nth-child(3) > .menu-link', {timeout:10000}).should('be.visible').click()
});

Then('deve entrar na pagina de Contato', () =>{
  cy.contains('Contact').should('be.visible')
  cy.get('h2',{ timeout: 10000 }).contains('Contact')
})
