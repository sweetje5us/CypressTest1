
    // порядковый номер типа
    const banner = {
    title: "title",
    page: 1, // заголовок
    action: 1,
    data_1: "2022-08-10",
    data_2:"2022-08-12",
    hour_1: "18",
    minute_1: "10",
    hour_2: "19",
    minute_2: "10",
    priority: "first",
    visible: "1"
    }
    const fixturePath = 'banner.jpg';


describe('Banners', ()=>{
    before(()=>{
        cy.visitCrmPage('9638700821', 'employee',"dev", "administration?tab=%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B")
    })
it('First case', ()=>{
    cy.get('.add-bunner-button').click()
    cy.get('[data-cy="create-banner-name-input"] > .field__input-wrapper > [data-cy="input"]').type(banner.title)

    cy.get('.m-b-32.align-items-end > .single-select > .popper > .popper__activator > [data-cy="select-label"]').click()
    cy. get(`.m-b-32.align-items-end > .single-select > .popper > .popper__content > .select__options > .select__options-list > .list > :nth-child(${banner.page})`).click()

    cy.get('[data-cy="create-banner-action-select"] > .popper > .popper__activator > [data-cy="select-label"]').click()
    cy.get(`[data-cy="create-banner-action-select"] > .popper > .popper__content > .select__options > .select__options-list > .list > :nth-child(${banner.action})`).click()

    cy.get('[data-cy="create-banner-datepicker"] > .mx-datepicker > .mx-input-wrapper > [modelvalue=""] > .field > .field__input-wrapper > [data-cy="input"]').click()
    cy.get(`[title="${banner.data_1}"]`).click()
    cy.get(`[title="${banner.data_2}"]`).click()
    cy.get(".banner-creation-content").click()  // решение для закрытия пикера времени
    
    cy.get('.mx-input-wrapper > [modelvalue=""] > .field > .field__input-wrapper > [data-cy="input"]').within(() => {
    cy.get(`:nth-child(1) > .mx-time-content > .mx-time-columns > :nth-child(1) > .mx-scrollbar-wrap > .mx-time-list > [data-index="2"]`).click()
    })
    // cy.get(`:nth-child(1) > .mx-time-content > .mx-time-columns > :nth-child(1) > .mx-scrollbar-wrap > .mx-time-list > [data-index="${banner.hour_1}"]`).click()

    // cy.get(`[data-cy="tab-${banner.priority}"]`).click()

    // cy.get('[data-cy="create-banner-type-select"] > .popper > .popper__activator > [data-cy="select-label"]').click()
    // cy.get(`[data-cy="create-banner-type-select"] > .popper > .popper__content > .select__options > .select__options-list > .list > :nth-child(${banner.visible})`).click()

    // cy.get(`.upload-container--input > .btn`).click()
    //     cy.get(`[id="banner-img"][type="file"][accept=".jpg, .jpeg"][data-v-691290d5]`).attachFile(fixturePath);

    // cy.get('[data-cy="create-banner-inner-button"]').click()
    })
})