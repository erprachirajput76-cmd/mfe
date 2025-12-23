const { withNativeFederation, shareAll } =
  require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'mfe1',
  filename: 'remoteEntry.js',

  publicPath: 'https://erprachirajput76-cmd.github.io/mfe/',

  exposes: {
    './routes': './src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    })
  }
});
