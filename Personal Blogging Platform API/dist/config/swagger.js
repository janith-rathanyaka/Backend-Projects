"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
exports.Options = {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Article API',
            description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
            version: '2.0.0',
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here',
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    },
};
//# sourceMappingURL=swagger.js.map