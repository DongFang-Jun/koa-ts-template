import fs from 'fs'
import path from 'path'

const controllers = {} as { [key: string]: any }

function readFileList(dir: any) {
  const files = fs.readdirSync(dir)
  files.forEach((item) => {
    if (item === 'index.ts') return

    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      readFileList(path.join(dir, item))
    } else {
      const temp = fullPath.split(__dirname + '/')[1]
      const obj_temp = temp.replaceAll('/', '_').split('.ts')[0]
      controllers[obj_temp] = require(`./${temp}`)
    }
  })
}
readFileList(__dirname)

export default controllers
