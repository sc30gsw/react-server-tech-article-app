import { Hono } from 'hono'
import articles from '~/features/articles/api/route'

const app = new Hono().basePath('/api')

const routes = app.route('/articles', articles)

export async function GET(request: Request) {
  const url = new URL(request.url)
  const req = new Request(url, {
    method: 'GET',
    headers: request.headers,
  })

  return await app.fetch(req)
}

export async function POST(request: Request) {
  const url = new URL(request.url)
  const req = new Request(url, {
    method: 'POST',
    headers: request.headers,
    body: request.body,
  })

  return await app.fetch(req)
}

export type AppType = typeof routes
