// Page Object for Training assignment and OJT completion/approval.

class TrainingPage {
  elements = {
    // Assignment (supervisor view)
    assignTrainingBtn: () => cy.get('[data-cy="training-assign-btn"]'),
    employeeSelect: () => cy.get('[data-cy="training-employee-select"]'),
    moduleSelect: () => cy.get('[data-cy="training-module-select"]'),
    confirmAssignBtn: () => cy.get('[data-cy="training-assign-confirm"]'),
    successToast: () => cy.get('[data-cy="toast-success"]'),

    // Employee record / assigned list
    assignedTrainingRow: (module) =>
      cy.get(`[data-cy="assigned-training-${module}"]`),
    trainingStatus: (module) =>
      cy.get(`[data-cy="training-status-${module}"]`),

    // Completion (employee view)
    completeTrainingBtn: (module) =>
      cy.get(`[data-cy="training-complete-${module}"]`),

    // Approval (supervisor view)
    pendingApprovalRow: (module) =>
      cy.get(`[data-cy="training-pending-${module}"]`),
    approveBtn: (module) => cy.get(`[data-cy="training-approve-${module}"]`),
  };

  // ---- Actions ----
  //method to visit the training assignment page
  visitAssignPage() {
    cy.visit("/training/assign");
  }

  //method to visit a specific employee's training record
  visitEmployeeRecord(email) {
    cy.visit(`/employees/${email}/training`);
  }

  //method to visit the training approval queue
  visitApprovalQueue() {
    cy.visit("/training/approvals");
  }

  //method to assign a training module to an employee
  assignTraining(employeeEmail, moduleName) {
    this.visitAssignPage();
    this.elements.assignTrainingBtn().click();
    this.elements.employeeSelect().select(employeeEmail);
    this.elements.moduleSelect().select(moduleName);
    this.elements.confirmAssignBtn().click();
  }

  //method to mark a training module as complete
  completeTraining(moduleName) {
    this.elements.completeTrainingBtn(moduleName).click();
  }

  //method to approve a completed training module
  approveTraining(moduleName) {
    this.elements.approveBtn(moduleName).click();
  }
}

export default new TrainingPage();
