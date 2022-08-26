import {call} from "./4.js" // можно задать вручную данные, я выбрал легкий путь импортом из пред задания
import {incident} from "./5.js" 

describe('6 exercise', ()=>{
    before(()=>{
        cy.visitCrmPage('9638700821', 'employee',"dev", "administration?tab=%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B")  
    })
    
it('4 ex', ()=>{
    cy.missedCall(call.phone1, call.phone2, call.randomPassword, "dev-telephony")
    })
it('5 ex', ()=>{
                cy.createIncident(Cypress.env('tokens'), incident)
                //cy.(открыть инцидент)
                //cy.(взять в работу инцидент)
                //cy.(закрыть инцидент)
    })
    
})
