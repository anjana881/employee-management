import TrainingPage from "../pages/TrainingPage";

describe("Training Workflow - Assignment", () => {
  const trainingObj = new TrainingPage();

  beforeEach(() => {
    cy.visit("https://example.com/employee-management");
    cy.loginAsSupervisor();
  });

  it("should assign a training module to an employee", () => {
    cy.fixture("users").then((data) => {
      trainingObj.assignTraining(
        data.training.assignedEmployeeEmail,
        data.training.moduleName
      );

      // Assertion: assignment success message
      trainingObj.elements
        .successToast()
        .should("be.visible")
        .and("contain.text", "assigned");
    });
  });

  it("should show the assigned training in the employee record", () => {
    cy.fixture("users").then((data) => {
      trainingObj.assignTraining(
        data.training.assignedEmployeeEmail,
        data.training.moduleName
      );

      // Open the employee's training record and verify it appears
      trainingObj.visitEmployeeRecord(data.training.assignedEmployeeEmail);

      trainingObj.elements
        .assignedTrainingRow(data.training.moduleName)
        .should("be.visible");
    });
  });
});
