const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/website/v1',
    createProxyMiddleware({
      target: 'https://back.anjez.app',
      changeOrigin: true,
      secure: true,
      onProxyRes(proxyRes, req, res) {
        // Log the response headers for debugging
        console.log('Proxy Response Headers:', proxyRes.headers);
        
        // Ensure we're getting JSON response
        if (proxyRes.headers['content-type'] && 
            proxyRes.headers['content-type'].includes('application/json')) {
          console.log('Received JSON response');
        } else {
          console.warn('Received non-JSON response:', proxyRes.headers['content-type']);
        }
      }
    })
  );
};
