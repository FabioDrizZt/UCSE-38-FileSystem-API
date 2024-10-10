const fs = require('fs')

const filePathOriginal = 'carpeta1'
const filePathDestino = 'carpeta2'
// Verificamos si las carpetas existen
if (fs.existsSync(filePathOriginal)) {
  if (!fs.existsSync(filePathDestino)) {
    fs.rename(filePathOriginal, filePathDestino, err => {
      if (err) {
        console.error('Error al mover la carpeta:', err.message)
      } else {
        console.log('Carpeta renombrada correctamente')
      }
    })
  } else {
    console.log('La carpeta destino ya existe')
  }
} else {
  console.log('La carpeta original no existe')
}
