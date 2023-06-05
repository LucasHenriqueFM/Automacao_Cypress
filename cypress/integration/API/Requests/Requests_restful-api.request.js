/// <reference types="cypress"/>

function Post_request(name, year, price, CPU_model, Hard_disk_size){
    return cy.request({

        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body:{
            "name": name,
            "data": {
               "year": year,
               "price": price,
               "CPU model": CPU_model,
               "Hard disk size": Hard_disk_size
            }
         }
    })
    .then((response) =>{
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(200)
    })
}

function Get_request(){
    return cy.request({

        method: 'GET',
        url: 'https://api.restful-api.dev/objects',
        body:{
         }
    })
    .then((response) =>{    
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(200)
    })
}


function Put_request(ID, name, year, price, CPU_model, Hard_disk_size, color){
    return cy.request({

        method: 'PUT',
        url: 'https://api.restful-api.dev/objects/' + ID,
        body:{
            "name": name,
            "data": {
               "year": year,
               "price": price,
               "CPU model": CPU_model,
               "Hard disk size": Hard_disk_size,
               "color": color
            }
         }
    })
    .then((response) =>{
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(200)
    })
}

export {Post_request}
export {Get_request}
export {Put_request}

