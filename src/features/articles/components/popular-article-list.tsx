import { ArticleCard } from '~/features/articles/components/article-card'
import { getPopularArticles } from '~/features/articles/server/fetcher'

export async function PopularArticleList() {
  const res = await getPopularArticles()

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
