const dirname = require('path').dirname

module.exports = {
  prefix: 'mgg',
  regex: {
    code: /(mgg)(\/{1}[a-z-]+){1,2}/gm,
    lib: /([@[a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: path => `mgg/${path[2].replace(/[_]+/g, '-')}`,
  path: `${dirname(require.resolve('@maggioli-design-system/svg-icons/package.json'))}/**/*.svg`,
}
