//'use strict';

/**
 * comment router.
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::comment.comment');

module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/articles/:articleId/comments",
      handler: "comment.find",
      config: {
        policies: [],
      },
    },
    {
      // Path defined with a URL parameter
      method: "POST",
      path: "/articles/:articleId/comments",
      handler: "comment.create",
      config: {
        policies: [],
      },
    },
    {
      // Path defined with a URL parameter
      method: "PUT",
      path: "/articles/:articleId/comments/:ID",
      handler: "comment.update",
      config: {
        policies: [],
      },
    },
    // { // Path defined with a regular expression
    //   method: 'GET',
    //   path: '/restaurants/:region(\\d{2}|\\d{3})/:id', // Only match when the first parameter contains 2 or 3 digits.
    //   handler: 'Restaurant.findOneByRegion',
    // }
  ],
};
