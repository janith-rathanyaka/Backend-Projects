"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = __importStar(require("fastify"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const swagger_1 = require("./config/swagger");
const app_1 = require("./config/app");
const swagger_2 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const app = fastify.default({ logger: true });
app.register(swagger_2.default, swagger_1.Options);
app.register(swagger_ui_1.default, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    }
});
routes_1.default.forEach(route => {
    app.register((app, options, done) => {
        app.route(route);
        done();
    });
});
const start = async () => {
    try {
        await app.ready();
        app.swagger();
        await app.listen({ port: app_1.config.app.port });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
mongoose_1.default
    .connect(`mongodb://${app_1.config.db.host}:${app_1.config.db.port}/${app_1.config.db.name}`)
    .then(() => app.log.info('MongoDB connected...'))
    .catch((err) => {
    app.log.error('Error connecting to MongoDB:', err.message);
    console.error('Detailed error:', err);
});
exports.default = app;
//# sourceMappingURL=index.js.map