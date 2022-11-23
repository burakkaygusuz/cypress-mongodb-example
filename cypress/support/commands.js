Cypress.Commands.add('insertMany', (collectionName) => {
  return cy.task('insertMany', { collectionName: collectionName }, { timeout: 10000 });
});
