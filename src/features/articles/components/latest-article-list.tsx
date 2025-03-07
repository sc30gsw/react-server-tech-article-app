import { ArticleCard } from '~/features/articles/components/article-card'
import { getLatestArticles } from '~/features/articles/server/fetcher'

export async function LatestArticleList() {
  const res = await getLatestArticles()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {res.articles.map((article) => (
        <span key={article.id}>
          <ArticleCard article={article} />
        </span>
      ))}
    </div>
  )
}
