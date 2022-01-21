/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs').promises
const path = require('path')
const camelcase = require('camelcase')

const { svgo } = require('./svgo')
const TEMPLATE = require('./template')

async function getIcons() {
  try {
    const directory = path.join(__dirname, '../src/icons/bx-icons/svg-icons/')
    console.log(`Checking directory:: ${directory}`)
    const getFiles = await fs.readdir(directory)
    const newFiles = getFiles.map(async (file) => {
      const fileName = path.parse(file).name
      const readFile = await fs.readFile(`${directory}${file}`, 'utf8')
      const pascalName = `Bx${camelcase(fileName, { pascalCase: true })}`
      const svgIcon = svgo(readFile).data
      const removeSvg = svgIcon
        .replace('<svg fill="none" viewBox="0 0 24 24">', '')
        .replace('</svg>', '')
        .replace('clip-rule', 'clipRule')
        .replace('fill-rule', 'fillRule')
      const templated = TEMPLATE(pascalName, removeSvg)
      await fs.writeFile(
        path.join(process.cwd(), 'src', 'icon-components', `${fileName}.tsx`),
        templated,
        'utf8'
      )
    })
    await Promise.all(newFiles)
  } catch (err) {
    console.log('fail', err)
  }
}

getIcons()
