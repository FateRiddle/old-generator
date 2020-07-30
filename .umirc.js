import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'schema生成器',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/form-render/schema-generator',
    },
    {
      title: '更新日志',
      path:
        'https://github.com/form-render/schema-generator/blob/master/CHANGELOG.md',
    },
  ],
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/schema-generator/',
  publicPath: '/schema-generator/',
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
