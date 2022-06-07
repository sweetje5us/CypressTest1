describe('visit url', () => {
  it('valid link', () => {
    // const user = {
    //   telephone,
    //   code,
    //   user_id,
    //   user_token
    // }
    cy.visit('/')
    cy.log(`Logging in as `)
    cy.get('[data-cy="auth-page-phone-input__input"]')
      .type('9638700823'),
      function(){
       cy.get('[data-cy="auth-page-code-input__input"]')
      .type(prompt("code"), '')
      }
  
  })
})
