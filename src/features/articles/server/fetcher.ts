import type { InferResponseType } from 'hono'
import {
  getLatestArticlesCacheKey,
  getPopularArticlesCacheKey,
} from '~/constants/cache-keys'
import { fetcher } from '~/lib/fetcher'
import { client } from '~/lib/rpc'

export async function getLatestArticles() {
  ;`use cache; tags=${getLatestArticlesCacheKey}`

  const url = client.api.articles.$url()
  type ResType = InferResponseType<typeof client.api.articles.$get>

  const res = await fetcher<ResType>(url)

  return res
}

export async function getPopularArticles(limit?: number) {
  ;`use cache; tags=${getPopularArticlesCacheKey}`
  // action={async () => {
  //   'use server'
  //   console.log('====================================')
  //   console.log('hoge')
  //   console.log('====================================')
  //   invalidate(getPopularArticles)
  // }}

  const url = client.api.articles.popular.$url({ query: { limit } })
  type ResType = InferResponseType<typeof client.api.articles.popular.$get>

  const res = await fetcher<ResType>(url)

  return res
}
