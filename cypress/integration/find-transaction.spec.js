
describe('Find Transaction Test',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user=>{
            const username=user.id
            const password=user.pwd

        cy.login(username,password)

        })
    })
    
    it('Should filter transaction',()=>{
        cy.get('account_activity_tab').click()
        cy.contains(' Find Transaction').click()
        cy.get('#aa_fromAccount').type('200')
        cy.get('#aa_toAmount').type('1000')
        cy.get('button[type="submit"]').click()

    })

    it('should display results',()=>{
        cy.get('#filtered_transactions_for_account')
        .should('be.visible')
        cy.get('tbody>tr').its('length').should('be.gt',0)
    })
})












































































































































































































































































































































































































































    





















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































    3
















































































































































































































































