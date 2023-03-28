"use strict";
import loginPage from "../pages/loginPage";

describe('login test', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('make the login', () => {
    loginPage.setUserField("standard_user")
    loginPage.setPassField("secret_sauces")
    loginPage.clickBtnLogin()
  })
})