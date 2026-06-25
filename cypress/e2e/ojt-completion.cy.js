import TrainingPage from "../pages/TrainingPage";

describe("OJT Completion Workflow", () => {
  const trainingObj = new TrainingPage();

  it("should let an employee complete an assigned training", () => {
    cy.fixture("users").then((data) => {
      const { assignedEmployeeEmail, moduleName } = data.training;

      // Supervisor assigns the training first (setup step)
      cy.loginAsSupervisor();
      trainingObj.assignTraining(assignedEmployeeEmail, moduleName);

      // Employee logs in and completes the training
      cy.loginAsEmployee();
      trainingObj.visitEmployeeRecord(assignedEmployeeEmail);
      trainingObj.completeTraining(moduleName);

      // Assertion: status reflects completion is recorded and awaiting approval
      trainingObj.elements
        .trainingStatus(moduleName)
        .should("be.visible")
        .and("not.contain.text", "Assigned");
    });
  });

  it("should let a supervisor approve a completed training", () => {
    cy.fixture("users").then((data) => {
      const { assignedEmployeeEmail, moduleName } = data.training;

      // Setup: assign module to employee
      cy.loginAsSupervisor();
      trainingObj.assignTraining(assignedEmployeeEmail, moduleName);

// employee completes the training
      cy.loginAsEmployee();
      trainingObj.visitEmployeeRecord(assignedEmployeeEmail);
      trainingObj.completeTraining(moduleName);

      // Supervisor approves from the approval queue
      cy.loginAsSupervisor();
      trainingObj.visitApprovalQueue();
      trainingObj.approveTraining(moduleName);

      // Assertion: status becomes approved
      trainingObj.visitEmployeeRecord(assignedEmployeeEmail);
      trainingObj.elements
        .trainingStatus(moduleName)
        .should("contain.text", "Approved");
    });
  });
});
