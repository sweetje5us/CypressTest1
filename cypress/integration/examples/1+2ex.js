const type =[
"device id",
"user id",
"список device id",
"список user id"  
] // массив типов пушей
const n = 3; // порядковый номер типа
const push = {
title: "title", // заголовок
text: "text", // текст
id: "test_id", // девайс или юзер айди
link: "link", // ссылка
is_external: true, // признак Внешней ссылки
type: type[n], // тип из массива типов пушей
}
const fixturePath = 'test.csv';
const mimeType = 'text/csv';
        

describe('PushNotifications', ()=>{
    before(()=>{
        cy.visitCrmPage('9638700821', 'employee', "dev", "administration?tab=%D0%9F%D1%83%D1%88%D0%B8")

    })
it('First case', ()=>{
    // cy.get('[data-cy="tab-manual"]').click() // отправка вручную
    if (cy.get('.modal-layout').should('be.visible')) {
        cy.get('.basis-button--type_secondary').click()
    }

    cy.get('[placeholder="Не более 37 символов с пробелами"][data-v-6f48a0b5]')
    .type(push.title) // значение заголовка пуша

    cy.get('[placeholder="Не более 178 символов с пробелами"][data-cy="textarea-field"]')
    .type(push.text) // значение текста пуша

    cy.get('[data-cy="select-label"][data-v-051b043a]').click() // раскрытие списка типа пуша
    if (n < 2 && n >= 0){
        cy.contains(`Указанный ${push.type}`).click() // выбор значения типа пуша из списка
        cy.get(`[placeholder="Введите ${push.type}"][data-v-6f48a0b5]`)
        .type(push.id) // значение id получателя пуша
    } else if (n >= 2 && n <= 3){
     
        cy.contains(`Загрузить ${push.type}`).click() // выбор значения типа пуша из списка
        cy.get(`[id="file"][accept=".csv"]`).attachFile(fixturePath);
        
        cy.get('[data-cy="notify-success"]').should('be.visible') // наличие ноти о выполнении
        .contains("Файл загружен")

    }
    cy.get('[placeholder="Ссылка для пуш-уведомления"][data-v-6f48a0b5]')
    .type(push.link) // значение ссылки пуша
    if (push.is_external){
        cy.contains("Внешняя ссылка").click() //есть ли признак внешней ссылки
    }

    cy.contains("отправить пуши").click() // отправка пуша

    cy.get('[data-cy="notify-success"][data-v-5c6a62d6]').should('be.visible') // наличие ноти о выполнении
    .contains("Рассылка создана и отправлена")
    })
})