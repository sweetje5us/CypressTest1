
    const phone = "79638700821"
    const role = "employee"
    const stand = "dev"
    export const incident = {
        channel: "chat",
        comment: "test",
        order_id: "10171365",
        problem: "1",
        source: "okolo",
        type: "collect",
        user_type: "operator"
    }
  
    describe('CreateIncident', ()=>{
        before(()=>{
            cy.visitCrmPage('9638700821', 'employee',"dev", "administration?tab=%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B")
        })
        it('Second case', ()=>{         
            const token = localStorage.getItem("token");
            cy.createIncident(token, incident)
        })
    })
   