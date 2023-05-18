import HomePage from "../../pageObjects/Home.page";
import LoginPage from "../../pageObjects/Login.page";
import BasePage from "../../pageObjects/Base.page";

describe("Saucedemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("3.Login  Scenario", () => {
    // Log into App
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("secret_sauce");
    LoginPage.loginButton.click();
    // Click on Burger/Stack icon
    HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "true");
    HomePage.stackIcon.click();
    HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "false");
    // Click logout button
    HomePage.logoutButton.click();
    // Validate that we see login button
    LoginPage.loginButton.should("be.visible");
  });

  it("4.Add items to cart", () => {
    //
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.addToCartSauceLabsBackpack.click();
    HomePage.addToCartSauceLabTShirt.click();
    HomePage.addToCartSauceLabOnesie.click();
    HomePage.cartBadgeIcon.scrollIntoView().should("have.text", "3");
  });

  it("5.Add and remove item", () => {
    LoginPage.logIntoPage("standard_user", "secret_sauce")
    //Click on sauce lab backpack
    HomePage.addToCartSauceLabsBackpack.click();
    // Validate that the badge is 1
    HomePage.cartBadgeIcon.scrollIntoView().should("have.text", "1");
    //remove the backpack
    HomePage.removeSauceLabsBackpack.click();
    //Validate that the badge should no longer exist
    HomePage.cartBadgeIcon.should("not.exist");
  });

  it.only("6. Open specific item, and validate title", () => {
    //log into page
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    //click on backpack item
    HomePage.itemNames.contains("Backpack").click();
    //validate that the correct item is opened, title is correct
    HomePage.itemName.should("have.text", "Sauce Labs Backpack");
  });

  it("7. Buy Sauce Labs Backpack", () => {
    //log into page
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    //add to cart "Sauce Labs Backpack"
    HomePage.addToCartSauceLabsBackpack.click();
    //add to cart "Sauce Labs Bolt T-Shirt"
    //open cart create CartsPage object
    //validate that we see "Sauce Labs Backpack" and "Sauce Labs Bolt T-Shirt"
    //validate that we see 2 items in cart list
    //click checkout (create new page object = CheckOutStepOne)
    //set firstname, lastname, zip code
    //click continue
    //(create step two page object) validate that we see "49.66"
    //click Finish
    //(create checkout complete page object) validate that we can see "Thank you for your order!"
    //
  });
});
