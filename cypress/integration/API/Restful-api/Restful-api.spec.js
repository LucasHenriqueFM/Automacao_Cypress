import * as Criar from "../Requests/Requests_restful-api.request"

let ID

Given('que estou inserindo um registro de cum item', () => {
    Criar.Post_request('teste', 2000, 1000.00, 'Intel Test', 'HardDiskTest')
    .then((payload) => {
        ID = cy.log(payload.body.id)
        
    })

});




Given('Buscar todos os itens', () => {
    Criar.Get_request();
});

Given('Editar um item especifico', () => {
    Criar.Post_request('teste', 2000, 1000.00, 'Intel Test', 'HardDiskTest' )
    .then((payload) => {
        ID = payload.body.id
        cy.log(payload.body.id)
    Criar.Put_request(ID, 'Edicao teste', 2000, 1000.00, 'Edicao Intel Test', 'edicao HardDiskTest', 'edicao color' )
    })

});



