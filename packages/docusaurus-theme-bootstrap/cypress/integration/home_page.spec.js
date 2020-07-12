/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const homePageFactory = require('../support/home_page.js').default;

describe('Initial Page', () => {
  const HomePage = homePageFactory();
  beforeEach(() => {
    HomePage.navigate();
  });

  it('Docs Section', () => {
    HomePage.goToSection('Docs');

    cy.url().should('include', '/docs');
  });

  it('Blog Section', () => {
    HomePage.goToSection('Blog');

    cy.url().should('include', '/blog');
  });
});
