const fs = require('fs')
const path = require('path')

const directorio = 'carpeta2'
if (!fs.existsSync(directorio)) {
  console.log('directorio no existe')
} else {
  // Borramos todos los archivos del directorio
  fs.readdirSync(directorio).forEach(file => {
    fs.unlinkSync(path.join(directorio, file))
  })
  // Borramos el directorio
  fs.rmdir(directorio, err => {
    if (err) {
      console.error(`Error: ${err.message}`)
      return
    }
    console.log('Carpeta eliminada correctamente')
  })
}
