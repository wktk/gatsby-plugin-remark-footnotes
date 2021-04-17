const remarkFootnotes = require(`remark-footnotes`)

module.exports.setParserPlugins = options => {
  return [remarkFootnotes, options]
}
