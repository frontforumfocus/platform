
import { mutation } from "./_generated/server";
import { v } from "convex/values"

export const CreatePrompt = mutation ({
    args: {
        title: v.string(),

    },
handler: async ( ctx , args ) => {
    await ctx.db.insert( 'prompts', {
        title  :args.title
    } );
}
})