import { ArticleDetailEditor } from '~/features/articles/components/article-detail-editor'
import { getArticleById } from '~/features/articles/server/fetcher'

export default async function ArticleIdPage({ id }: { id: string }) {
  const res = await getArticleById({ id })

  if (!res) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-teal-500" />
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {res.article.title}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium">
              {res.article.author.charAt(0)}
            </div>
            <div className="ml-3">
              <div className="font-medium text-gray-900">
                {res.article.author}
              </div>
              <div className="text-sm text-gray-500 flex">
                <div>
                  <span className="mr-2">Published on</span>
                  {new Date(res.article.createdAt).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="text-gray-500">
                  ・ {res.article.viewCount} views
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArticleDetailEditor description={res.article.description} />
    </div>
  )
}
