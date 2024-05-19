"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticle = exports.getAllArticle = exports.addArticle = exports.getArticle = void 0;
const Article_1 = __importDefault(require("../models/Article"));
const getArticle = async (req, reply) => {
    try {
        const article = {
            _id: { type: 'string' },
            title: { type: 'string' },
            brand: { type: 'string' },
            price: { type: 'string' },
            age: { type: 'number' },
            services: { type: 'object' },
        };
        return article;
    }
    catch (err) {
        return reply.code(500).send({ error: err });
    }
};
exports.getArticle = getArticle;
const addArticle = async (req, reply) => {
    try {
        const article = new Article_1.default(req.body);
        return await article.save();
    }
    catch (err) {
        return reply.code(500).send({ error: err });
    }
};
exports.addArticle = addArticle;
const getAllArticle = async (req, reply) => {
    try {
        const articles = await Article_1.default.find();
        return articles;
    }
    catch (err) {
        return reply.code(500).send({ error: err });
    }
};
exports.getAllArticle = getAllArticle;
const deleteArticle = async (req, reply) => {
    try {
        const params = req.params;
        const id = params.id;
        console.log('id', id);
        const article = await Article_1.default.findByIdAndDelete(id);
        return article;
    }
    catch (err) {
        return reply.code(500).send({ error: err });
    }
};
exports.deleteArticle = deleteArticle;
//# sourceMappingURL=articleController.js.map