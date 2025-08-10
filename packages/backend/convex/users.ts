import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const users = await ctx.db.query("users").collect();
    return users;
  }
})

export const add = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const orgId = identity.orgId as string;
    if(!orgId) {
      throw new Error("Missing organization");
    }

    // throw new Error("Not implemented");

    const userId = await ctx.db.insert("users", args);
    return userId;
  }
})