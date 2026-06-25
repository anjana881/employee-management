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

  visitAssignPage() {
    cy.visit("/training/assign");
    return this;
  }

  visitEmployeeRecord(email) {
    cy.visit(`/employees/${email}/training`);
    return this;
  }

  visitApprovalQueue() {
    cy.visit("/training/approvals");
    return this;
  }

  assignTraining(employeeEmail, moduleName) {
    this.visitAssignPage();
    this.elements.assignTrainingBtn().click();
    this.elements.employeeSelect().select(employeeEmail);
    this.elements.moduleSelect().select(moduleName);
    this.elements.confirmAssignBtn().click();
    return this;
  }

  completeTraining(moduleName) {
    this.elements.completeTrainingBtn(moduleName).click();
    return this;
  }

  approveTraining(moduleName) {
    this.elements.approveBtn(moduleName).click();
    return this;
  }
}

export default TrainingPage;
