module.exports = {
  entry: "./dist/index.js",
  output: {
    path: "./dist",
    filename: "browser.js",
    library: "Rethinkdb",
    libraryTarget: "umd"
  }
}
