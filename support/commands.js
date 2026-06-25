// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


 

// Visits the login page, fills credentials, and submits.
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/login");
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="login-btn"]').click();
});

// Logs in as the supervisor using fixture credentials.
Cypress.Commands.add("loginAsSupervisor", () => {
  cy.fixture("users").then((users) => {
    cy.login(users.supervisor.username, users.supervisor.password);
  });
});


// Logs in as the employee using fixture credentials.
Cypress.Commands.add("loginAsEmployee", () => {
  cy.fixture("users").then((users) => {
    cy.login(users.employeeUser.username, users.employeeUser.password);
  });
});