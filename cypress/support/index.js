// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

export {default as pushs} from '../fixtures/Pages/pushNotification'
export {default as banners} from '../fixtures/Pages/bannerPage'
export {default as tickets} from '../fixtures/Pages/ticketPage'

beforeEach(() => {
 
    Cypress.env('tokens', []);

});
// Alternatively you can use CommonJS syntax:
// require('./commands')
