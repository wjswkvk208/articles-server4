"use strict";

/**
 *  comment controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::comment.comment", ({ strapi }) => ({
  // Method 2: Wrapping a core action (leaves core logic in place)
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
//   // Method 2: Wrapping a core action (leaves core logic in place)
//   async find(ctx, next) {
//     console.log(ctx);
//     // // some custom logic here
//     // ctx.query = { ...ctx.query, local: 'en' }

//     // // Calling the default core action
//     // const { data, meta } = await super.find(ctx);

//     // // some more custom logic
//     meta.date = Date.now();

//     const entities = await super.find({
//       article: ctx.params.articleId,
//     });

//     return { data, meta };
//   },
// };
