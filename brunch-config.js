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
    noPushState: true,
  },
  npm: {
    globals: {
      'io': 'socket.io-client'
    }
  },
  modules: {
    autoRequire: {
      'app.js': ['initialize']
    }
  },
  plugins: {
    babel: {
      pattern: /\.jsx?$/
    },
    eslint: {
      pattern: /^app\/.*\.jsx?$/
    },
    sass: {
      mode: 'native',
      modules: true
    }
  }
}
