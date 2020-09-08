const fs = require('fs')
const path = require('path')
const cp = require('child_process')
const chokidar = require('chokidar')

// ejecutar: node dev.js /ruta/al/proyecto/node_modules
var myArgs = process.argv.slice(2)

const dev = myArgs[0] || '/home/jose/propio/newFaa'
const dir = ['react', 'react-dom', '@material-ui', 'react-i18next']

// borro las carpetas de librerias compartidas
dir.map(item => {
  try {
    if (!fs.existsSync(`node_modules/${item}2`)) {
      fs.rename(`node_modules/${item}`, `node_modules/${item}2`, function(err) {
        if (err) throw err
        console.log('Move: ', item)
      })
    }

    // fs.rmdirSync(`node_modules/${item}`, { recursive: true })
  } catch (err) {
    console.error(`Error while deleting ${dir}.`)
  }
})

// link simbolico a app
dir.map(item => {
  fs.lstat(`node_modules/${item}`, function(err, stats) {
    if (!stats || stats.isSymbolicLink()) {
      fs.symlink(`${dev}/node_modules/${item}`, `node_modules/${item}`, error => {
        console.log('link', item)
        if (error) {
          console.log('error: ', error)
        }
      })
    }
  })
})

console.log('Esperando cambios...')
const watcher = chokidar.watch('./src/')

watcher.on('ready', function() {
  watcher.on('change', path => {
    let aPath = path.split('/')
    aPath.pop()
    aPath.shift()

    const run = `npx babel --presets=@babel/env,@babel/react --plugins @babel/plugin-syntax-dynamic-import,@babel/plugin-syntax-import-meta,@babel/plugin-proposal-class-properties,@babel/plugin-proposal-json-strings ${path} -d lib/${aPath.join(
      '/'
    )}`

    cp.exec(run, function(err, stdout, stderr) {
      console.log(stdout)
      // handle err, stdout, stderr
    })
  })
})
