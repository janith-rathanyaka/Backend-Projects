export const GetArticleSchema = {
	description: 'Gets all Articles',
	tags: ['Articles'],
	summary: 'Gets all Articles',
	response: {
		200: {
			description: 'Successful response',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: { type: 'string' },
					title: { type: 'string' },
					brand: { type: 'string' },
					price: { type: 'string' },
					age: { type: 'number' },
					services: { type: 'object' },
					__v: { type: 'number' },
				},
			}
		},
	},
};


export const AddArticleSchema = {
	description: 'Create a new article',
	tags: ['Articles'],
	summary: 'Creates new article with given values',
	body: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			body: { type: 'string' },
			date: { type: 'number' },
			type: { type: 'string' },
		},
		required: ['title', 'body', 'date', 'type'],
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				body: { type: 'string' },
				date: { type: 'number' },
				type: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};


export const GetAllArticleSchema = {
	description: 'Gets all Articles',
	tags: ['Articles'],
	summary: 'Gets all Articles',
	response: {
		200: {
			description: 'Successful response',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: { type: 'string' },
				title: { type: 'string' },
				body: { type: 'string' },
				date: { type: 'number' },
				type: { type: 'string' },
					__v: { type: 'number' },
				},
			}
		},
	},
};


export const DeleteArticleSchema = {
	description: 'Deletes a single Articles',
	tags: ['Articles'],
	summary: 'Deletes Articles by Id',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'Article Id',
			},
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				body: { type: 'string' },
				date: { type: 'number' },
				type: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};