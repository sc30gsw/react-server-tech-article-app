import { Link } from '@lazarv/react-server/navigation'
import type { api } from '../../../../convex/_generated/api'

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }
  return `${text.slice(0, maxLength)}...`
}

type ArticleCardProps = {
  article: (typeof api.articles.get._returnType)[number]
}

export function ArticleCard({ article }: ArticleCardProps) {
  const truncatedTitle = truncateText(article.title, 45)
  const truncatedDescription = truncateText(article.description, 100)

  return (
    <Link to={`/articles/${article.id}`}>
      <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer w-full h-[280px]">
        <div className="h-2 bg-teal-600" />
        <div className="p-6 h-[calc(280px-8px)] flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {truncatedTitle}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {truncatedDescription}
          </p>
          <div className="flex items-center mt-auto">
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium mr-3">
              {article.author.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-gray-900">{article.author}</div>
              <div className="text-sm text-gray-500">
                {new Date(article.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
