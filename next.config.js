const withTM = require("next-transpile-modules")([
  "@1r21/api-h5",
  "@1r21/request-h5",
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __API_HOST__: JSON.stringify(process.env.VITE_API_HOST),
      })
    );
    return config;
  },
});
