import { Hono } from 'hono'
import { convexClient } from '~/lib/convex-client'
import { api } from '../../../../convex/_generated/api'
import type { Id } from '../../../../convex/_generated/dataModel'

const app = new Hono()
  .get('/', async (c) => {
    const articles = await convexClient.query(api.articles.get, {})

    return c.json({ articles }, 200)
  })
  .get('/popular', async (c) => {
    const { limit } = c.req.query()

    const articles = await convexClient.query(api.articles.getPopular, {
      limit: Number(limit) ?? 20,
    })

    return c.json({ articles }, 200)
  })
  .get('/:id', async (c) => {
    const { id } = c.req.param()

    const article = await convexClient.query(api.articles.getById, {
      id: id as Id<'articles'>,
    })

    await convexClient.mutation(api.articles.incrementViewCount, {
      id: id as Id<'articles'>,
    })

    return c.json({ article }, 200)
  })

export default app
