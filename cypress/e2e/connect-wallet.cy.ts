describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://nextjs-wallet-adapter.vercel.app/');
    cy.contains('Disconnect Wallet').should('be.disabled');
    cy.contains('Select Wallet').click();
    cy.contains('Already have a wallet? View options').click();
    cy.contains('E2E Wallet').click();
    cy.contains('Disconnect').should('not.be.disabled');
    cy.get('.wallet-adapter-button').should('not.have.text', 'Select Wallet')
    cy.wait(1000)
  })
})