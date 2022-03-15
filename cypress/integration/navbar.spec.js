

describe('Navbar Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')

    })
    it('should disply online banking content', function () {

        cy.get('#onlineBankingMenu > div > strong').click()
        cy.url().should('include', 'online-banking.html')
    })
    it('should display feedback content',function(){
        cy.get('#feedback > div > strong').click()
        cy.url().should('include', 'feedback.html')
    })
    it('should display homepage content',function(){
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

    })
})



