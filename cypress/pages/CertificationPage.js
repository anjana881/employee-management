class CertificationPage {
  elements = {
    expiringAlertsTab: () => cy.get('[data-cy="cert-expiring-tab"]'),
    expiringList: () => cy.get('[data-cy="cert-expiring-list"]'),
    expiringBadge: (certName) =>
      cy.get(`[data-cy="cert-expiring-badge-${certName}"]`),
  };



  // visits the certifications expiring page and clicks the expiring alerts tab
  visitExpiringAlerts() {
    cy.visit("/certifications/expiring");
    this.elements.expiringAlertsTab().click();
    return this;
  }
}

export default CertificationPage;