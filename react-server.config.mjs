export default {
  root: 'src/app',
  resolve: {
    alias: {
      '~/': new URL('./src/', import.meta.url).pathname,
    },
  },
  export(paths) {
    // SSGの設定
    return [...paths, { path: '/popular' }]
  },
}
