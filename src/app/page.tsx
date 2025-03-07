import { Link } from '@lazarv/react-server/navigation'
import { ArrowRight, Clock } from 'lucide-react'
import { Suspense } from 'react'
import { LatestArticleList } from '~/features/articles/components/latest-article-list'
import { PopularArticleList } from '~/features/articles/components/popular-article-list'
import {
  getLatestArticles,
  getPopularArticles,
} from '~/features/articles/server/fetcher'

export default async function Home() {
  const [latestArticlesResponse, popularArticlesResponse] = await Promise.all([
    getLatestArticles(),
    getPopularArticles(),
  ])

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to TechShare
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and share valuable insights in technology.
        </p>
        <Link
          to="/editor"
          className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300"
        >
          Start Writing <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>

      <div className="mb-12">
        <div className="flex items-center mb-8">
          <Clock size={24} className="text-gray-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <LatestArticleList articles={latestArticlesResponse.articles} />
        </Suspense>
      </div>
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Clock size={24} className="text-gray-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Articles
            </h2>
          </div>
          <Link
            to="/popular"
            className="inline-flex items-center text-teal-600 hover:text-teal-700"
          >
            View all
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <PopularArticleList articles={popularArticlesResponse.articles} />
        </Suspense>
      </div>
    </div>
  )
}
