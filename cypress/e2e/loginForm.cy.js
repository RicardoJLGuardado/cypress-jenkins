"use strict";
import loginPage from "../pages/loginPage";

describe('login test', () => {

  it('make the login', () => {
    cy.visit('https://www.saucedemo.com/');
    const user = "standard_user";
    const pass = "secret_sauce";
    console.log(user + pass)
    loginPage.clickLogin(user, pass);
  })
})