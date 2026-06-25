import CertificationPage from "../pages/CertificationPage";

describe("Certification Tracking", () => {
  const certificationObj = new CertificationPage();

  beforeEach(() => {
    cy.loginAsSupervisor();
  });

  it("should show an alert for a certification expiring within 30 days", () => {
    cy.fixture("users").then((data) => {
      certificationObj.visitExpiringAlerts();

      // assertion for expiring list to be visible and not empty
      certificationObj.elements.expiringList().should("be.visible");

      // assertion for the expiring badge to be visible and contain the correct text
      certificationObj.elements
        .expiringBadge(data.certification.expiringCertName)
        .should("be.visible")
        .and("contain.text", "Expiring");
    });
  });
});