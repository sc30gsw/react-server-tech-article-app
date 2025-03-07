import { Hono } from 'hono'
import { convexClient } from '~/lib/convex-client'
import { api } from '../../../../convex/_generated/api'

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

export default app
