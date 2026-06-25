class CertificationPage {
  elements = {
    expiringAlertsTab: () => cy.get('[data-cy="cert-expiring-tab"]'),
    expiringList: () => cy.get('[data-cy="cert-expiring-list"]'),
    expiringBadge: (certName) =>
      cy.get(`[data-cy="cert-expiring-badge-${certName}"]`),
  };

  // ---- Actions ----
  visitExpiringAlerts() {
    cy.visit("/certifications/expiring");
    this.elements.expiringAlertsTab().click();
    return this;
  }
}

export default CertificationPage;