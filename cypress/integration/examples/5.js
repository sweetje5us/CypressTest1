    const token = "PGbmeFbxVs6fY-OC6Oud7"
    const incident = {
        order_id: '1',
             problem: '1',
             comment: 'test',
    }

    describe('PushNotifications', ()=>{
        it('Second case', ()=>{
            cy.createIncident(token, incident)
        })
    })