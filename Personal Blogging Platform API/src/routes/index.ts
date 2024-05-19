import { RouteOptions } from 'fastify';
import * as articleController from '../controllers/articleController';
import { AddArticleSchema, DeleteArticleSchema, GetAllArticleSchema, GetArticleSchema } from './documentation/articleApi';


const getArticleRoute: RouteOptions = {
	method: 'GET',
	url: '/api/article/:id',
	handler: articleController.getArticle,
	schema: GetArticleSchema,
};


const addArticleRoute: RouteOptions = {
	method: 'POST',
	url: '/api/article',
	handler: articleController.addArticle,
	schema: AddArticleSchema ,
};

const getAllArticleRoute: RouteOptions = {
	method: 'GET',
	url: '/api/article',
	handler: articleController.getAllArticle,
	schema: GetAllArticleSchema ,
};

const deleteArticleRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/article/:id',
	handler: articleController.getAllArticle,
	schema: DeleteArticleSchema,
};

const routes = [
    getArticleRoute, 
	addArticleRoute,
	getAllArticleRoute,
	deleteArticleRoute
];

export default routes;