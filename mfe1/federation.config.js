const { withNativeFederation, shareAll } =
  require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'mfe1',

  filename: 'remoteEntry.js',

  exposes: {
    './routes': './src/app/app.routes.ts'
  },

  publicPath: 'https://erprachirajput76-cmd.github.io/mfe/mfe1/browser/',

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
