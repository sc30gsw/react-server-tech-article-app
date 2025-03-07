import { ArticleCard } from '~/features/articles/components/article-card'
import type { getPopularArticles } from '~/features/articles/server/fetcher'

type PopularArticleListProps = {
  articles: Awaited<ReturnType<typeof getPopularArticles>>['articles']
}

export function PopularArticleList({ articles }: PopularArticleListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <span key={article.id}>
          <ArticleCard article={article} />
        </span>
      ))}
    </div>
  )
}
