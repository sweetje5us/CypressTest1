describe('visit url', () => {
  it('valid link', () => {
    // const user = {
    //   telephone,
    //   code,
    //   user_id,
    //   user_token
    // }
    const phone = '9638700823'
    var asyncFunc = function () {
      document.addEventListener('DOMContentLoaded', function () {callback()});   
    };
    function newFunction(callback1,callback2){
      cy.log(`Logging in as `)
    
      
      callback1();
      
      callback2();
    }
    function typePhone(e){
      cy.get('[data-cy="auth-page-phone-input__input"]')
      .type(phone)
    }
    function typeCode(e){
      cy.wait(3000)
      
        cy.get('[data-cy="auth-page-code-input__input"]')
        .type(prompt("code"))
      
    }
  
    cy.visit('/')
    
   
       
      newFunction(typePhone, typeCode)
      
  
  })
})
