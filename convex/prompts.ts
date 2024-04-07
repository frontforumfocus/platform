import { OpenAI } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import { action, mutation, query } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";


const openai = new OpenAI();

export const Activity = action({
  

    args  : {
      message: v.string(),
    },
    handler: async (ctx, args) => {
      
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: args.message}],
        model: 'gpt-3.5-turbo',
      });
  
      const input = args.message;
      const response = chatCompletion.choices[0].message.content ?? "";
      
      await ctx.runMutation(api.message.insertEntry, {
        input,
        response,
      })
  
  
  
      return chatCompletion;
  
    },
  });
  
  export const insertEntry = mutation({
    args: {
      input: v.string(),
      response: v.string(),
    },
    handler: async (ctx, args ) => {
      await ctx.db.insert("entries", {
        input:args.input,
        response:args.response,
      });
    }, 
  })
  
  export const getAllEntries = query({
    handler: async (ctx) => {
      const entries = await ctx.db.query('entries')
      .collect()
  
    }
  })