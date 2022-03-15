
describe('New-Paye Test',function(){
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user=>{
            const username=user.id
            const password=user.pwd

        cy.login(username,password)

        })
    })
    it('Should add new Payee to the page',function(){
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('np_new_payee-address').type('Address')
        cy.get('np_new_payee_account').type('123456789')
        cy.get('np_new_payee_details').type('Details')
        cy.get('#add_new_payee').click()
       


    })
    it('should show success message',function(){
        cy.get('#alert_content').should('be.visible')
        .and('contain','The new payee Name was successfully created')
        

    })

})