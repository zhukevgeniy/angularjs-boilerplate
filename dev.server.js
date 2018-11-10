const webpack = require("webpack");
const opn = require("opn");
const WebpackDevServer = require("webpack-dev-server");
const webpackDevConfig = require("./webpack/webpack.config.dev");
const webpackDevServerConfig = require("./webpack/webpack.config.dev-server");
require("dotenv/config");

(async environment => {
  const { APP_PORT, APP_HOST } = environment;
  const compiler = webpack(webpackDevConfig);
  const devServer = new WebpackDevServer(
    compiler,
    webpackDevServerConfig.devServer
  );

  try {
    await devServer.listen(APP_PORT, APP_HOST);
    await opn(`http://${APP_HOST}:${APP_PORT}`);
  } catch (error) {
    console.error(error);
  }
})(process.env);
