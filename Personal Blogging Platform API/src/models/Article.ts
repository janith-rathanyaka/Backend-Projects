import { Schema, model } from "mongoose";

export interface IArticle {
	title: string;
	body: string;
    date:number;
    type:string;
}

const articleSchema = new Schema<IArticle>({
	title: String,
	body: String,
    date: Number,
    type: String,
});

export default model<IArticle>('Article', articleSchema);
