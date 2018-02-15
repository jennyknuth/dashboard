module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app\/)/,
        'app.js': /^app\//
      }
    },
    stylesheets: { joinTo: 'app.css' }
  },
  server: {
    hostname: '0.0.0.0',
    port: 8080,
    noPushState: false,
  },
  npm: {
    compilers: ['babel-brunch']
  },
  modules: {
    autoRequire: {
      'app.js': ['initialize']
    }
  },
  plugins: {
    babel: {
      pattern: /\.jsx?$/,
      presets: ['es2015', 'react', 'stage-0'],
      ignore: [
        /^node_modules\/(?!get-urls|url-regex)/
      ]
    },
    eslint: {
      pattern: /^app\/.*\.jsx?$/
    },
    sass: {
      mode: 'native',
      modules: true
    }
  }
};
