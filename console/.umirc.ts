import { defineConfig } from 'umi';

export default defineConfig({
  base: '/console/',
  publicPath: '/',
  antd: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
