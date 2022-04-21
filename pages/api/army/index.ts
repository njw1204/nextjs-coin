import { createProxyMiddleware } from "http-proxy-middleware";

const getPercentage = () => {
  return ((+(new Date()) - +(new Date('2020-09-11T00:00:00+09:00'))) / (+(new Date('2022-08-10T00:00:00+09:00')) - +(new Date('2020-09-11T00:00:00+09:00'))) * 100).toFixed(7);
};

const getHandler = () =>
  createProxyMiddleware({
    router: () => `https://dummyimage.com/300x100/fff/000.png&text=%20${getPercentage()}%25`,
    changeOrigin: true,
    ignorePath: true,
    onProxyRes: (proxyRes) => {
      proxyRes.headers['cache-control'] = 'no-cache, no-store, must-revalidate';
    },
  });

export const config = {
  api: {
    bodyParser: false,
  },
};


export default getHandler();