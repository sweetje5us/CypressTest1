// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
//____🐸🐸🐸🐸____🐸🐸🐸
//___🐸🐸🐸🐸🐸__🐸🐸🐸🐸
//__🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸⚪️⚫️⚫️⚪️🐸🐸🐸⚪️⚫️⚫️⚪️
//🐸⚪️⚫️⚫️⚪️⚫️⚪️🐸⚪️⚫️⚫️⚪️⚫️⚪️
//🐸⚪️⚫️⚪️⚫️⚫️⚪️🐸⚪️⚫️⚪️⚫️⚫️⚪️
//🐸🐸⚪️⚫️⚪️⚪️🐸🐸🐸⚪️⚫️⚪️⚪️
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🔴🔴🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🔴🔴🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
//🐸🐸🐸🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸
//🐸🐸🐸🐸🐸🐸🐸🐸🐸
// For more comprehensive examples of custom
// ***ATTENTION! hint ∞
// https://stackoverflow.com/questions/56431316/set-local-storage-in-cypress
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-file-upload';
const filename = '/path/to/tokens.json'

// Authorization 
Cypress.Commands.add('genCode', (phone, role, stand) => {

    cy.request({
        method: 'POST',
        url: `https://${stand}-auth.okolo.app/api/${role}/gencode`,
        body: {
            'phone': phone
        }
    })
})

Cypress.Commands.add('missedCall', (phone1, phone2, randomPassword, stand) => {

    cy.request({
        method: 'POST',
        url: `https://${stand}.okolo.app/events/summary`,
        body: {
            "json": `{\"call_direction\":1,\"entry_result\":0,\"from\":{\"number\":\"${phone1}\"},\"to\":{\"extension\":\"15589\"},\"line_number\":\"${phone2}\",\"entry_id\":\"${randomPassword}\"}`
        }
    })
})

Cypress.Commands.add('createIncident', (token, incident_data) => {
    
    cy.request({
        method: 'POST',
        url: `https://dev-incidents.okolo.app/api/v1/incidents/create`,
        
        headers: {
            'app-token': `${token}`    
          },
        body: {
            "source": `${incident_data.source}`,
            "order_id": `${incident_data.order_id}`,
             "type":  `${incident_data.type}`,
             "problem": `${incident_data.problem}`,
             "channel":  `${incident_data.channel}`,
             "comment": `${incident_data.comment}`,
             "user_type":  `${incident_data.user_type}`
        
        }
    })
})

Cypress.Commands.add('getAuthCode', (phone, role, stand) => {

    cy.request({
        method: 'POST',
        url: `https://${stand}-auth.okolo.app/mod/${role}/get-code-by-phone`,
        body: {
            'phone': phone
        }
    }).then(response => {
        return cy.wrap(response.body.code)
    })
})

Cypress.Commands.add('getCrmToken', (phone, role, stand) => {
    cy.genCode(phone, role, stand).then(() => {
        cy.getAuthCode(phone, role, stand).then(code => {
            cy.request({
                method: 'POST',
                url: `https://${stand}-auth.okolo.app/api/employee/auth`,
                body: {
                    code: code,
                    device_id: 'RkIt6jcptG2On6v4BJ1H',
                    phone: phone,
                    app: 'crm'
                }
            }
           )
           .then(response => {
            
            Cypress.env("tokens", response.body.session.token)
            
        })
        })
    })
})



Cypress.Commands.add('getMobileToken', (phone, role, stand) => {
    cy.genCode(phone, role, stand).then(() => {
        cy.getAuthCode(phone, role, stand).then(code => {
            cy.request({
                method: 'POST',
                url: `https://${stand}-auth.okolo.app/api/client/auth`,
                body: {
                    code: code,
                    device_id: '1SYJXny1XuREnDnhzRJ2',
                    phone: phone,
                }
            }).then(response => { 
                cy.log(code, device_id, phone)
                return cy.wrap(response.body.session.token)})
        })
    })
})



Cypress.Commands.add('visitCrmPage', (phone, role, stand, route) => {
    let token
    let id
    let expires
    cy.getCrmToken(phone, role, stand).then(response => {
        token = response.body.session.token,
        id = response.body.session.id,
        expires = response.body.session.expires
        
    })
    cy.visit(`/${route}`, {
        onBeforeLoad(win) {
            win.localStorage.token = token
            win.localStorage.expire_date = expires
            win.localStorage.id = id
        }
    })
})

Cypress.Commands.add('myOwnAuth', (phone, role, stand, route) => {
    let token
    let id
    let expires
    cy.getCrmToken(phone, role, stand).then(response => {
        token = response.body.session.token,
        id = response.body.session.id,
        expires = response.body.session.expires
        
    })
    cy.visit(`/${route}`, {
        onBeforeLoad(win) {
            win.localStorage.token = token
            win.localStorage.expire_date = expires
            win.localStorage.id = id
        }
    })
    
})