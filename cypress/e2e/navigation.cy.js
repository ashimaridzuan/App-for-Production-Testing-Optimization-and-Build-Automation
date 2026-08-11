describe("side menu navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it('navigates to the Card Sets page when the "Card Sets" link is clicked', () => {
    cy.get("#cardSetPage").click();
    cy.contains("h2", "Study Set Library").should("be.visible");
  });

  it('navigates to the About page when the "About" link is clicked', () => {
    cy.get("#aboutPage").click();
    cy.contains("h2", "About Study Night").should("be.visible");
  });

  it('navigates to the Home page when the "Home" link is clicked', () => {
    cy.get("#aboutPage").click();
    cy.get("#homePage").click();
    cy.contains("h1", "Study Night").should("be.visible");
  });
});
