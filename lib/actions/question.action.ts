"use server";

import { connectToDatabase } from "../mongooose";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";

export async function createQuestion(params: any) {
  try {
    await connectToDatabase();
    const { title, content, tags, author, path } = params;
    console.log("as");
    console.log(title, content, tags, author, path);
    const question = await Question.create({ title, content, author });
    console.log(question);
    const tagDocuments = [];
    // create a tag or get them if exists
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }
    console.log(tagDocuments);
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
  } catch (err) {}
}
