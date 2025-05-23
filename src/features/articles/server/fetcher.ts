import type { InferRequestType, InferResponseType } from 'hono'
import { fetcher } from '~/lib/fetcher'
import { client } from '~/lib/rpc'

export async function getLatestArticles() {
  const url = client.api.articles.$url()
  type ResType = InferResponseType<typeof client.api.articles.$get>

  const res = await fetcher<ResType>(url)

  return res
}

export async function getPopularArticles(limit?: number) {
  // 'use cache; ttl=200; tags=popular-articles'

  const url = client.api.articles.popular.$url({ query: { limit } })
  type ResType = InferResponseType<typeof client.api.articles.popular.$get>

  const res = await fetcher<ResType>(url)

  return res
}

export async function getArticleById(
  param: InferRequestType<(typeof client.api.articles)[':id']['$get']>['param'],
) {
  const url = client.api.articles[':id'].$url({ param })
  type ResType = InferResponseType<(typeof client.api.articles)[':id']['$get']>

  const res = await fetcher<ResType>(url)

  return res
}
