"use server";

import { connectToDatabase } from "../mongooose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch (err) {}
}
