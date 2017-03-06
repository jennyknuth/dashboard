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
      pattern: /\.jsx?$/,
      presets: ["es2015", "react", "stage-0"],
    },
    eslint: {
      pattern: /^app\/.*\.jsx?$/
    },
    sass: {
      mode: 'native',
      modules: true
    },
    static: {
      processors: [
        require('html-brunch-static')({
          processors: [
            require('marked-brunch-static') ({})
          ]
        })
      ]
    },
  }
}
