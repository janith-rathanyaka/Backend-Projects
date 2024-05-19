import { Document } from 'mongoose'
import { FastifyRequest, FastifyReply } from 'fastify'
import Article from '../models/Article'

export const getArticle = async (
  req: FastifyRequest,
  reply: FastifyReply,
): Promise<any> => {
  try {
    const article = {
      _id: { type: 'string' },
      title: { type: 'string' },
      brand: { type: 'string' },
      price: { type: 'string' },
      age: { type: 'number' },
      services: { type: 'object' },
    }
    return article
  } catch (err) {
    return reply.code(500).send({ error: err })
  }
}

export const addArticle = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const article = new Article(req.body)
    return await article.save()
  } catch (err) {
    return reply.code(500).send({ error: err })
  }
}

export const getAllArticle = async (
  req: FastifyRequest,
  reply: FastifyReply,
): Promise<Document[]> => {
  try {
    const articles = await Article.find()
    return articles
  } catch (err) {
    return reply.code(500).send({ error: err })
  }
}

export const deleteArticle = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const article = await Article.findByIdAndDelete(id);
		return article;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};
