import { v } from "convex/values";
import { action } from "./_generated/server";
import OpenAI from "openai";

const openai = new OpenAI();

export const handleUserAction = action({
  

  args  : {
    message: v.string(),
  },
  handler: async (ctx, args) => {
    
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: args.message}],
      model: 'gpt-4',
    });

    console.log(chatCompletion);

    return chatCompletion;

  },
});