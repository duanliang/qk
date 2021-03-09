import { defineConfig } from 'umi';

export default defineConfig({
  base: '/design/',
  publicPath: '/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
