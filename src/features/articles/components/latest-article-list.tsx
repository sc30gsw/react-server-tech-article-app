import { ArticleCard } from '~/features/articles/components/article-card'
import type { getLatestArticles } from '~/features/articles/server/fetcher'

type LatestArticleListProps = {
  articles: Awaited<ReturnType<typeof getLatestArticles>>['articles']
}

export function LatestArticleList({ articles }: LatestArticleListProps) {
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
