"use strict";
class loginPage{

   elements = {
       userNameInput: () => cy.get("#user-name"),
       userPassInput: () => cy.get("#password"),
       btnLogin: () => cy.get("[data-test=\"login-button\"]")
   }

    setUserField(user){
       this.elements.userNameInput().type(user);
    }
    setPassField(pass){
        this.elements.userPassInput().type(pass);
    }
    clickBtnLogin(){
       this.elements.btnLogin().click()
    }
}
module.exports = new loginPage();