describe('CreateIncident', ()=>{
    before(()=>{
        cy.clearLocalStorageSnapshot();
    })

    it('Second case', ()=>{   
      cy.myOwnAuth('9638700821', 'employee',"dev", "administration?tab=%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B")
      cy.saveLocalStorage("token");
      
    })
})