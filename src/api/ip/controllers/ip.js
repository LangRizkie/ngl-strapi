'use strict';

/**
 *  ip controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ip.ip');
