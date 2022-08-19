
    // порядковый номер типа
    const banner = {
    title: "авто-тест",
    page: 1, // заголовок
    action: 1, //действие по тапу
    data_1: "2022-09-10",
    data_2:"2022-09-12",
    hour_1: "18",
    hour_2: "19",
    priority: "second",
    visible: "1"
    }
    const fixturePath = 'banner.jpg';


describe('Banners', ()=>{
    before(()=>{
        cy.visitCrmPage('9638700821', 'employee',"dev", "administration?tab=%D0%91%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D1%8B")
    })
it('First case', ()=>{
    if (cy.get('.modal-layout').should('be.visible')) {
        cy.get('.basis-button--type_secondary').click()
    }
    cy.get('.add-bunner-button').click() 

    cy.get('.m-b-32.align-items-end > .single-select > .popper > .popper__activator > [data-cy="select-label"]').click()
    cy.get(`.m-b-32.align-items-end > .single-select > .popper > .popper__content > .select__options > .select__options-list > .list > :nth-child(${banner.page})`).click()

    cy.get('[data-cy="create-banner-action-select"] > .popper > .popper__activator > [data-cy="select-label"]').click()
    cy.get(`[data-cy="create-banner-action-select"] > .popper > .popper__content > .select__options > .select__options-list > .list > :nth-child(${banner.action})`).click()

    cy.get('[data-cy="create-banner-datepicker"] > .mx-datepicker > .mx-input-wrapper > [modelvalue=""] > .field > .field__input-wrapper > [data-cy="input"]').click()
    cy.get(`[title="${banner.data_1}"]`).click()
    cy.get(`[title="${banner.data_2}"]`).click()
    cy.get(".banner-creation-content").click()  // решение для закрытия пикера времени
    
    cy.get('.mx-input-wrapper > [modelvalue=""] > .field > .field__input-wrapper > [data-cy="input"]').click()
   
    .get(`.mx-datepicker-content > .mx-time-range > :nth-child(1) > .mx-time-content > .mx-time-columns > :nth-child(1) > .mx-scrollbar-wrap > .mx-time-list > [data-index="${banner.hour_1}"]`).click()
    .get(`.mx-datepicker-content > .mx-time-range > :nth-child(2) > .mx-time-content > .mx-time-columns > :nth-child(1) > .mx-scrollbar-wrap > .mx-time-list > [data-index="${banner.hour_2}"]`).click()
    cy.get(".admin-page").click() // решение для закрытия пикера времени
    cy.get(`[data-cy="tab-${banner.priority}"]`).click()

    cy.get('[data-cy="create-banner-type-select"] > .popper > .popper__activator > [data-cy="select-label"]').click()
    cy.get(`[data-cy="create-banner-type-select"] > .popper > .popper__content > .select__options > .select__options-list > .list > :nth-child(${banner.visible})`).click()

    cy.get(`.upload-container--input > .btn`).click() //прикрепление файла
        cy.get(`[id="banner-img"][type="file"][accept=".jpg, .jpeg"][data-v-691290d5]`).attachFile(fixturePath);
    cy.get('[data-cy="create-banner-name-input"] > .field__input-wrapper > [data-cy="input"]').type(banner.title)

    
    
        if (cy.get('.upload-image')){ //если изображение загрузилось клик на "создать"
            cy.get('[data-cy="create-banner-inner-button"]').click()}
        })
})