/* eslint-disable no-undef */
describe("Sample test cases", () => {
  it("default : 1 pizza of each type", () => {
    // visit webpage
    cy.visit("http://localhost:3000");
    // select microsoft
    cy.get("#idCustomerDropdown").select("microsoft");
    // add 1 small pizza
    cy.get("#idBtnAddSmallPizza").click();
    // add 1 medium pizza
    cy.get("#idBtnAddMediumPizza").click();
    // add 1 large pizza
    cy.get("#idBtnAddLargePizza").click();
    // check if amount is 23.98
    cy.get("#idOutputText").contains("$49.97");
  });

  it("Microsoft : Gets a 3 for 2 deal for Small Pizzas", () => {
    // visit webpage
    cy.visit("http://localhost:3000");
    // select microsoft
    cy.get("#idCustomerDropdown").select("microsoft");
    // add 3 small pizza
    cy.get("#idBtnAddSmallPizza").click();
    cy.get("#idBtnAddSmallPizza").click();
    cy.get("#idBtnAddSmallPizza").click();
    // check if amount is 23.98
    cy.get("#idOutputText").contains("$23.98");
  });

  it("default : should not get Microsoft's deal", () => {
    // visit webpage
    cy.visit("http://localhost:3000");
    // select microsoft
    cy.get("#idCustomerDropdown").select("default");
    // add 3 small pizza
    cy.get("#idBtnAddSmallPizza").click();
    cy.get("#idBtnAddSmallPizza").click();
    cy.get("#idBtnAddSmallPizza").click();
    // check if amount is 23.98
    cy.get("#idOutputText").contains("$23.98").should("not.exist");
  });

  it("Amazon: Gets a discount on Large Pizza where the price drops to $19.99 per pizza", () => {
    // visit webpage
    cy.visit("http://localhost:3000");
    // select amazon
    cy.get("#idCustomerDropdown").select("amazon");
    // add 1 large pizza
    cy.get("#idBtnAddLargePizza").click();
    // check if amount is 19.99
    cy.get("#idOutputText").contains("$19.99");
  });

  it("default: should not get Amazon's deal", () => {
    // visit webpage
    cy.visit("http://localhost:3000");
    // select default
    cy.get("#idCustomerDropdown").select("default");
    // add 1 large pizza
    cy.get("#idBtnAddLargePizza").click();
    // check amount should not be 19.99
    cy.get("#idOutputText").contains("$19.99").should("not.exist");
  });

  it("Facebook: Gets a 5 for 4 deal on Medium Pizza", () => {
    // visit webpage
    cy.visit("http://localhost:3000");
    // select facebook
    cy.get("#idCustomerDropdown").select("facebook");
    // add 5 medium pizza
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    // check if amount is 63.96
    cy.get("#idOutputText").contains("$63.96");
  });

  it("default: should not get Facebook's deal", () => {
    // visit webpage
    cy.visit("http://localhost:3000");
    // select facebook
    cy.get("#idCustomerDropdown").select("default");
    // add 5 medium pizza
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    cy.get("#idBtnAddMediumPizza").click();
    // check if amount is 63.96
    cy.get("#idOutputText").contains("$63.96").should("not.exist");
  });
});
