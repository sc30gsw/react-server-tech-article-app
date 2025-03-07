'use client'
// biome-ignore lint/style/useNamingConvention: <explanation>
import type MDEditor from '@uiw/react-md-editor'
import { useEffect, useState } from 'react'

export function ArticleDetailEditor({
  description,
}: Record<'description', string>) {
  const [Editor, setEditor] = useState<typeof MDEditor | null>(null)

  useEffect(() => {
    // ? style-to-objectがcjs/index.js（CommonJS モジュール）が exports を使用しているため、useEffectによるimportを実施
    // biome-ignore lint/correctness/noUndeclaredDependencies: <explanation>
    import('@uiw/react-md-editor').then((mod) => {
      setEditor(() => mod.default)
    })
  }, [])

  if (!Editor) {
    return (
      <div className="w-full h-[400px] border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
        Loading editor...
      </div>
    )
  }

  return (
    <div data-color-mode="light" className="prose max-w-none">
      <Editor.Markdown source={description} />
    </div>
  )
}
