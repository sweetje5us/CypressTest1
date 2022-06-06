describe('visit url', () => {
  it('valid link', () => {
    cy.visit('/')
    cy.log(`Logging in as `)
    cy.get('[data-cy="auth-page-phone-input__input"]')
      .type('9638700821')
      cy.get('[data-cy="auth-page-code-input__input"]')
      .type('4755')
  })
})
