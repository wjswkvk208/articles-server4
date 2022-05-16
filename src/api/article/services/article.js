"use strict";

/**
 * article service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::article.article", ({ strapi }) => ({
  async create(data) {
    console.log({ data });
    const result = await super.create({ data });
    // some more logic
    return result;
  },
}));

// module.exports = {
//   find(params, populate) {
//     return strapi.query("articles").find(params, populate);
//   },
// };
