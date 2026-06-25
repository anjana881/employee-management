class TrainingPage {
  elements = {
    assignTrainingBtn: () => cy.get('[data-cy="training-assign-btn"]'),
    employeeSelect: () => cy.get('[data-cy="training-employee-select"]'),
    moduleSelect: () => cy.get('[data-cy="training-module-select"]'),
    confirmAssignBtn: () => cy.get('[data-cy="training-assign-confirm"]'),
    successToast: () => cy.get('[data-cy="toast-success"]'),
    assignedTrainingRow: (module) =>
      cy.get(`[data-cy="assigned-training-${module}"]`),
    trainingStatus: (module) =>
      cy.get(`[data-cy="training-status-${module}"]`),
    completeTrainingBtn: (module) =>
      cy.get(`[data-cy="training-complete-${module}"]`),
    approveBtn: (module) => cy.get(`[data-cy="training-approve-${module}"]`),
  };

 
  // visits the training assignment page
  visitAssignPage() {
    cy.visit("/training/assign");
    return this;
  }

  // visits specific employee's training record
  visitEmployeeRecord(email) {
    cy.visit(`/employees/${email}/training`);
    return this;
  }

  // visits the training approval queue
  visitApprovalQueue() {
    cy.visit("/training/approvals");
    return this;
  }

  // assigns a training module to employee
  assignTraining(employeeEmail, moduleName) {
    this.visitAssignPage();
    this.elements.assignTrainingBtn().click();
    this.elements.employeeSelect().select(employeeEmail);
    this.elements.moduleSelect().select(moduleName);
    this.elements.confirmAssignBtn().click();
    return this;
  }

  // marks a training module as completed
  completeTraining(moduleName) {
    this.elements.completeTrainingBtn(moduleName).click();
    return this;
  }

  // approves a completed training module
  approveTraining(moduleName) {
    this.elements.approveBtn(moduleName).click();
    return this;
  }
}

export default TrainingPage;
