
describe('Payment Test',function(){
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user=>{
            const username=user.id
            const password=user.pwd

        cy.login(username,password)

        })
    })
    it('should send new payment(fake)',()=>{
        cy.get('#pay_bills-tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2022-03-15{enter}')
        cy.get('#sp_description').type('Just a description')
        cy.get('#pay_saved_payees').click()

    })
    it('should show success message',()=>{
        cy.get('#alert_content').should('be.visible').and('contain','The payment was successfully submitted')

    })
})