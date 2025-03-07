import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const get = query({
  args: {},
  handler: async (ctx) => {
    const articles = await ctx.db.query('articles').order('desc').collect()

    return articles.map((article) => ({
      ...article,
      id: article._id,
      createdAt: article._creationTime,
    }))
  },
})

export const getPopular = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { limit }) => {
    const articles = await ctx.db
      .query('articles')
      .order('desc')
      .take(limit ? limit : 10)

    const sortedArticles = articles.sort((a, b) => {
      return b.viewCount - a.viewCount
    })

    return sortedArticles.map((article) => ({
      ...article,
      id: article._id,
      createdAt: article._creationTime,
    }))
  },
})

export const crete = mutation({
  args: {
    title: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('articles', {
      title: args.title,
      description: args.description,
      author: '@Sicut_study',
      viewCount: 0,
    })
  },
})
