class EmployeePage {
  elements = {
    addEmployeeBtn: () => cy.get('[data-cy="employee-add-btn"]'),
    firstNameInput: () => cy.get('[data-cy="employee-firstname"]'),
    lastNameInput: () => cy.get('[data-cy="employee-lastname"]'),
    emailInput: () => cy.get('[data-cy="employee-email"]'),
    departmentSelect: () => cy.get('[data-cy="employee-department"]'),
    saveBtn: () => cy.get('[data-cy="employee-save"]'),
    successToast: () => cy.get('[data-cy="toast-success"]'),
    emailError: () => cy.get('[data-cy="employee-email-error"]'),
  };

 
//method to open create employee page
  openCreateForm() {
    this.elements.addEmployeeBtn().click();
  }
//method to fill employee form
  fillEmployeeForm({ firstName, lastName, email, department }) {
    this.elements.firstNameInput().clear().type(firstName);
    this.elements.lastNameInput().clear().type(lastName);
    this.elements.emailInput().clear().type(email);
    this.elements.departmentSelect().select(department);
  }
//method to save employee form
  save() {
    this.elements.saveBtn().click();
   
  }

  //method to create employee by filling the form and saving it
  createEmployee(employee) {
    this.visit().openCreateForm().fillEmployeeForm(employee).save();
   
  }
}

export default EmployeePage;