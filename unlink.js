const fs = require('fs')

function fileExists(path) {
  const existe = fs.existsSync(path)
  return existe
}

fs.unlink('archivo_modificado.txt', (err) => {
  if (!fileExists('archivo_modificado.txt')) {
    return
  }
  if (err) throw new Error('Unable to unlink')
  console.log('Archivo eliminado')
})
