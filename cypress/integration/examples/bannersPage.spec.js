describe('Banners', ()=>{
    before(()=>{
        cy.visitCrmPage('9638700821', 'employee',"dev", "administration?tab=%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B")
    })
it('First case', ()=>{
    cy.get('.add-bunner-button').click()
    cy.get('[data-cy="create-banner-name-input"] > .field__input-wrapper > [data-cy="input"]').type('title')
    })
})