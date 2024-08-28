describe('JSONPlaceholder API Testing', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const EXPECTED_LENGTH = 100;
  const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NOT_FOUND: 404,
  };

  it('Fetch Posts', () => {
    cy.request(`${baseUrl}/posts`)
      .its('status')
      .should('eq', HTTP_STATUS.OK);

    cy.request(`${baseUrl}/posts`)
      .its('body')
      .should('have.length', EXPECTED_LENGTH);
  });

  it('Create a Post', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/posts`,
      body: {
        title: 'example',
        body: 'data',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(HTTP_STATUS.CREATED);
      expect(response.body).to.have.property('id');
      expect(response.body).to.include({
        title: 'example',
        body: 'data',
        userId: 1
      });
    });
  });

  it('Update a Post', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/posts/1`,
      body: {
        id: 1,
        title: 'example updated',
        body: 'data updated',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(HTTP_STATUS.OK);
      expect(response.body).to.have.property('title', 'example updated');
    });
  });

  it('Delete a Post', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/posts/1`
    }).then((response) => {
      expect(response.status).to.eq(HTTP_STATUS.OK);
    });
  });

  it('Non-Existing', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/non-existing`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(HTTP_STATUS.NOT_FOUND);
    });
  });
});