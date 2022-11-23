describe('Movie database', () => {
  before(() => {
    cy.insertMany('Movies');
  });

  const titleName = 'Jurassic World: Fallen Kingdom';

  it(`should be include ${titleName} movie `, () => {
    cy.task('findMovieByTitle', { titleName: titleName }).then((doc) => {
      cy.fixture('movie.json').then((movie) => {
        expect(doc.directors, 'Directors').to.have.include.members(movie.directors);
        expect(doc.runtime, 'Runtime').to.eq(movie.runtime);
        expect(doc.year, 'Year').to.eq(movie.year);
        expect(doc.cast, 'Cast').to.have.include.members(movie.cast);
      });
    });
  });
});
