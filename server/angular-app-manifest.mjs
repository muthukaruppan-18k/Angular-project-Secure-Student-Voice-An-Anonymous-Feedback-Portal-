
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://muthukaruppan-18k.github.io/Angular-project-Secure-Student-Voice-An-Anonymous-Feedback-Portal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-project-Secure-Student-Voice-An-Anonymous-Feedback-Portal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: 'a0246583f04484ee4eb7ba5489ae2f469aa8530de7a341f59e4cf06e6c490626', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '90892a9de99829ea51138025e17e7bcb58349b59ca483ca2741a564009bf0ff5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2910, hash: 'eb7092e0f5b0df9c5eb8293026b220dff2f25ec903a45c7393a4d28588d4e70f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
