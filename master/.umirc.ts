import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/design', name: '主题', microApp: 'design' },
    { path: '/console', name: '开发', microApp: 'console' },
    { path: '/data', name: '数据', microApp: 'data' },
  ],
  fastRefresh: {},
  layout: {
    name: '主系统',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'design',
          entry: '//localhost:8081/design',
        },
        {
          name: 'console',
          entry: '//localhost:8082/console',
        },
        {
          name: 'data',
          entry: '//localhost:8084/data',
        },
      ],
    },
  },
});
