/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises
const path = require('path')
const camelcase = require('camelcase')

async function iconsToIndex() {
  try {
    const directory = path.join(__dirname, '../src/icon-components')
    console.log(`Checking directory:: ${directory}`)
    const getFiles = await fs.readdir(directory)
    const getIconsToIndex = getFiles.map((file) => {
      const fileName = path.parse(file).name
      const pascalName = `Bx${camelcase(fileName, { pascalCase: true })}`
      return {
        fileName,
        pascalName
      }
    })
    const iconImports = getIconsToIndex.map(
      (file) =>
        `export { ${file.pascalName} } from './icon-components/${file.fileName}'`
    )
    iconImports.push(`
      export { __DEV__ } from './is-dev'
      export type { IconBaseProps } from './types'
    `)
    await fs.writeFile(
      path.join(process.cwd(), 'src', 'index.tsx'),
      iconImports.join('\n'),
      'utf8'
    )
  } catch (err) {
    console.log('fail', err)
  }
}

iconsToIndex()
