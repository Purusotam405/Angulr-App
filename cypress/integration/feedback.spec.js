
describe('Feedback Test',function(){
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()

    })
    it('should load the feedback form',function(){
        cy.get('form').should('be.visible')

    })
    it('should fill feedback form',function(){
        cy.get('#name').type('admin')
        cy.get('#email').type('admin@gmail.com')
        cy.get('#subject').type('Just subjects')
        cy.get('#comment').type('Good work')
       
        // cy.get('[type="reset"]').click()

    })
    it('should submit feedbck form',function(){
        cy.get('.btn-signin').click()
        
    })
    it('should display feedback message',function(){
        cy.get('#feedback-title').contains('Feedback')


    })
})