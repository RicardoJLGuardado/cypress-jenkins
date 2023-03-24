import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'

const test = require('../fixtures/example.json')

describe('Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    test.forEach(test => {
        it(test.name, () => {
            loginPage.setUserField(test.userName)
            loginPage.setPassField(test.userPass)
            loginPage.clickBtnLogin();
            

            if(test.name === 'Login with valid data'){
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            }else{
                loginPage.elements.errorMessage().should('have.text', test.expected)
            }
        });
    })

})