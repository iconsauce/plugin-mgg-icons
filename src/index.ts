import { resolve } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

const maggioliSvgIconsPlugin: IconsaucePlugin = {
  prefix: 'mgg',
  regex: {
    code: /(mgg)(\/{1}[0-9a-z-]+){1}/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: (path: RegExpMatchArray) => `mgg/${path[2].replace(/[_]+/g, '-')}`,
  path: `${resolve('node_modules', '@maggioli-design-system/svg-icons')}/**/*.svg`,
}

export default maggioliSvgIconsPlugin
module.exports = maggioliSvgIconsPlugin
