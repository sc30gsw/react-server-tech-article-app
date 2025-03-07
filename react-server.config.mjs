export default {
  root: 'src/app',
  export(paths) {
    // SSGの設定
    return [...paths, { path: '/popular' }]
  },
  resolve: {
    alias: {
      '~/': new URL('./src/', import.meta.url).pathname,
    },
  },
}
