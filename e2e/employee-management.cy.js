import EmployeePage from "../pages/EmployeePage";

describe("Employee Management", () => {
  const employeeObj = new EmployeePage();

  beforeEach(() => {
    cy.visit("https://example.com/employee-management");
    cy.loginAsSupervisor();
  });

  it(" should create a new employee with valid details and show a success message", () => {
    cy.fixture("users").then((user) => {
      employeeObj.createEmployee(user.newEmployee);
      // assertion for success message after creating an employee
      employeeObj.elements
        .successToast()
        .should("be.visible")
        .and("contain.text", "Employee created");

    });

      
  });

  it("should restrict duplicate email", () => {
    cy.fixture("users").then((data) => {
      // original employee exists
      employeeObj.createEmployee(data.newEmployee);
      employeeObj.elements.successToast().should("be.visible");

      // create another employee with the same email
      employeeObj.createEmployee(data.duplicateEmployee);

      // assertion for duplicate email error to be visible
      employeeObj.elements
        .emailError()
        .should("be.visible")
        .and("contain.text", "already in use");
      employeeObj.elements.successToast().should("not.exist");
    });
  });
});
