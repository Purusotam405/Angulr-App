
describe('Currency-Exchange',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user=>{
            const username=user.id
            const password=user.pwd

        cy.login(username,password)

        })
    })
    it('should fill converison form',()=>{
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('G8P')
        cy.get('#pc_amount').type('2000')
        cy.get('#pc_inDollars_true').click()
        cy.get('pc_calculate_costs').click()

    })
    it('should display conversion amount',()=>{
        cy.get('#pc_conversion_amount')
        .should('contain','1180.50 pound (G8P)=2000.00 US. dollar (USD)')

    })

})