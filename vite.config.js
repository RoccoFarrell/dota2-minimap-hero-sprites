const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'dota2-css-hero-sprites',
      fileName: (format) => `dota2-css-hero-sprites.${format}.js`
    }
  }
});