

describe('Login/Logout Test',function(){
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()

    })
    it('should try to login wiht invalid data',function(){
        //    cy.get('#user_login').type(username)
        // cy.get('#user_password').type(password)
        // cy.get('#user_remember_me').click()
        // cy.contains('Sign in').click()
  
        cy.login(username,password)



    })
    it('should display error message',function(){
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')

    })
    it('should login to the application',function(){
        cy.fixture('user').then(user=>{
            const username=user.id
            const password=user.pwd

        // cy.get('#user_login').type(username)
        // cy.get('#user_password').type(password)
        // cy.get('#user_remember_me').click()
        // cy.contains('Sign in').click()
        cy.login(username,password)
        })
        // cy.get('ul.nav-tabs').should('be.visible')

    })
    it('should logout from the application',function(){
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include','index.html')
    })
})
    