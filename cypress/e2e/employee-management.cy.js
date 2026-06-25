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
      // Assertion for success message after creating an employee
      employeeObj.elements
        .successToast()
        .should("be.visible")
        .and("contain.text", "Employee created");

    });

      
  });

  it("should restrict duplicate email", () => {
    cy.fixture("users").then((data) => {
      // First, make sure the original employee exists
      employeeObj.createEmployee(data.newEmployee);
      employeeObj.elements.successToast().should("be.visible");

      // Try to create another employee with the same email
      employeeObj.createEmployee(data.duplicateEmployee);

      // Assertion: duplicate email error shown, record not saved
      employeeObj.elements
        .emailError()
        .should("be.visible")
        .and("contain.text", "already in use");
      employeeObj.elements.successToast().should("not.exist");
    });
  });
});
