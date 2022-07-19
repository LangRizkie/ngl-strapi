'use strict';

/**
 * ip service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ip.ip');
