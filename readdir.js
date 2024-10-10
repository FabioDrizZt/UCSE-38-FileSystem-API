const fs = require('fs')

const filePath = '../../'

if (!fs.existsSync(filePath)) {
  console.log('El directorio no existe.')
} else {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.log('Error al leer el directorio:', err)
    } else {
      console.log('Archivos en el directorio:')
      // console.table(files)
      files.forEach(file => console.log(file))
    }
  })
}
