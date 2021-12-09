const isDevelopment = process.env.NODE_ENV !== 'production';
const isDevServer = process.env.DEV_SERVER === 'true';
const { DEV_PORT } = process.env;

module.exports = { isDevelopment, isDevServer, DEV_PORT };
