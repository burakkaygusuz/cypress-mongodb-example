declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * @description Inserts multiple documents into a collection.
     * @example
     *   cy.insertMany("collectionName")
     * @see https://www.mongodb.com/docs/drivers/node/upcoming/usage-examples/insertMany
     */
    insertMany(collectionName: string): Chainable<any>;
  }
}
