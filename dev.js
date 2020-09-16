// const fs = require('fs')
const path = require('path')
const cp = require('child_process')
const chokidar = require('chokidar')
const dotenv = require('dotenv')
const fs = require('fs-extra')

dotenv.config()

const dev = process.env.PATH_APP
const nodeModules = 'lib/node_modules'
// const libStorybook = '../libStorybook'
const libStorybook = 'lib/'

console.log('path aplicacion: ', process.env.PATH_APP)

// components que requieren hooks compoartidos
const dir = ['react', 'react-dom', '@material-ui', 'react-i18next', 'react-router-dom']

const delFolder = async () => {
  // borro las carpetas de librerias compartidas
  await Promise.all(
    dir.map(item => {
      try {
        if (!fs.existsSync(`${nodeModules}/${item}2`)) {
          fs.rename(
            `${libStorybook}/node_modules/${item}`,
            `${libStorybook}/node_modules/${item}2`,
            function (err) {
              if (err) throw err
              console.log('Move: ', item)
            }
          )
        } else {
          fs.rmdirSync(`${nodeModules}/${item}`, { recursive: true })
        }

        // fs.rmdirSync(`node_modules/${item}`, { recursive: true })
      } catch (err) {
        console.error(`Error while deleting ${dir}.`)
      }
    })
  )
}

const createSymbolicLink = async () => {
  // link simbolico a app
  await Promise.all(
    dir.map(item => {
      fs.lstat(`${nodeModules}/${item}`, function (err, stats) {
        if (!stats || !stats.isSymbolicLink()) {
          fs.symlink(`${dev}/node_modules/${item}`, `${libStorybook}/node_modules/${item}`, error => {
            console.log('link', item)
            if (error) {
              console.log('error: ', error)
            }
          })
        }
      })
    })
  )
}

const watch = async () => {
  console.log('Esperando cambios...')
  const watcher = chokidar.watch('./src/')

  watcher.on('ready', function () {
    watcher.on('change', path => {
      let aPath = path.split('/')
      aPath.pop()
      aPath.shift()

      const run = `npx babel --presets=@babel/env,@babel/react --plugins @babel/plugin-syntax-dynamic-import,@babel/plugin-syntax-import-meta,@babel/plugin-proposal-class-properties,@babel/plugin-proposal-json-strings ${path} -d lib/${aPath.join(
        '/'
      )}`

      cp.exec(run, function (err, stdout, stderr) {
        console.log(stdout)
        // handle err, stdout, stderr
      })
    })
  })
}

const run = async () => {
  await delFolder()
  await createSymbolicLink()
  await watch()
}

run()
