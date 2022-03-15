/// <reference types="Cypress"/>

describe('SearchBox',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('should type in to the searchbox and submit with pressing enter ',function(){
        cy.get('#searchTerm').type('some Text{enter}')
    })
    it('Should show search results page',()=>{
        cy.get('h2').contains('Search Results')
    })
})