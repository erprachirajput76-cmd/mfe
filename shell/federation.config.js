const { withNativeFederation, shareAll } =
  require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'shell',

  // 🔥 THIS FIXES file:///C:/ ISSUE FOR SHELL
  publicPath: 'https://erprachirajput76-cmd.github.io/mfe/',

  remotes: {
    mfe1: 'https://erprachirajput76-cmd.github.io/mfe/remoteEntry.json',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
