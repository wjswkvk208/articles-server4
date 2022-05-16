"use strict";

/**
 *  article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async create(ctx) {
    ctx.request.body.user = ctx.state.user.id;
    const entity = await strapi
      .service("api::article.article")
      .create(ctx.request.body);

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  //Find with populate ----------------------------------------

  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, populate: "author" };

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now();

    return { data, meta };
  },
}));

// module.exports = {

// };
