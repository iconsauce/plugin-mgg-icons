import { resolve } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

const maggioliSvgIconsPlugin: IconsaucePlugin = {
  prefix: 'mgg',
  regex: {
    code: /(mgg)(\/[0-9a-z-]+)/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: (path: RegExpMatchArray) => `mgg/${path[2].replace(/_+/g, '-')}`,
  path: `${resolve(__dirname, '../../../@maggioli-design-system/svg-icons')}/**/*.svg`,
}

export default maggioliSvgIconsPlugin
module.exports = maggioliSvgIconsPlugin
