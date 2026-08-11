describe("form behavior", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("happy path: submits a valid create-set form and renders the new set", () => {
    cy.get("#cardSetPage").click();
    cy.get("[data-cy='toggle_form']").click();
    cy.get("[data-cy='set_form'] input[name='titleInput']").type("New Study Set");
    cy.get("[data-cy='set_form'] input[type='submit']").click();

    cy.contains("New Study Set").should("be.visible");
  });

  it("unhappy path: shows an error when the create-set form is submitted with an empty title", () => {
    cy.get("#cardSetPage").click();
    cy.get("[data-cy='toggle_form']").click();
    cy.get("[data-cy='set_form'] input[type='submit']").click();

    cy.get(".error").should("contain.text", "TITLE CANNOT BE EMPTY");
  });

  it("happy path: submits a valid add-card form and renders the new card", () => {
    cy.get("#cardSetPage").click();
    cy.get("[data-cy='study-set-header']").should("be.visible");
    cy.get("[data-cy='1']").click();
    cy.get("[data-cy='toggle_form']").click();
    cy.get("[data-cy='card_form'] input[name='termInput']").type("Term 1");
    cy.get("[data-cy='card_form'] input[name='descriptionInput']").type("Description 1");
    cy.get("[data-cy='card_form'] input[type='submit']").click();

    cy.contains("Term 1").should("be.visible");
  });

  it("unhappy path: shows an error when the add-card form is submitted with empty inputs", () => {
    cy.get("#cardSetPage").click();
    cy.get("[data-cy='1']").click();
    cy.get("[data-cy='toggle_form']").click();
    cy.get("[data-cy='card_form'] input[type='submit']").click();

    cy.get(".error").should("contain.text", "TERM AND DESCRIPTION CANNOT BE EMPTY");
  });
});