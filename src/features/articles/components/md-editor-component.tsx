// biome-ignore lint/correctness/noUndeclaredDependencies: <explanation>
// biome-ignore lint/style/useNamingConvention: <explanation>
import type MDEditor from '@uiw/react-md-editor'
import { type CSSProperties, useEffect, useState } from 'react'

type MdEditorProps = {
  value: string
  onChange: (value?: string) => void
}

export function MdEditorComponent({ value, onChange }: MdEditorProps) {
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
    <div className="space-y-2">
      <div
        data-color-mode="light"
        style={
          {
            '--color-fg-default': '#000000',
            '--color-canvas-default': '#ffffff',
          } as CSSProperties
        }
        className="prose max-w-none"
      >
        <Editor
          value={value}
          onChange={onChange}
          preview="live"
          height={400}
          className="w-full !text-black"
          textareaProps={{
            placeholder: 'Write your article content here...',
            style: {
              color: '#000000',
              backgroundColor: '#ffffff',
              fontSize: '16px',
            },
          }}
        />
      </div>
    </div>
  )
}
