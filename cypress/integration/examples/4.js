    const call = {
    phone1: "79638700821",
    phone2: "79638700821",
    randomPassword: "qwerty123"
    }

    describe('PushNotifications', ()=>{
        it('Second case', ()=>{
            cy.missedCall(call.phone1, call.phone2, call.randomPassword, "dev-telephony")
        })
    })