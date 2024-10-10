const fs = require('fs')

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error:', err)
    return
  }
  // Ponemos todos los datos del archivo en mayuscula
  const newData = data.toUpperCase()
  // Escribimos el nuevo contenido en un nuevo archivo llamado 'archivo_modificado.txt'
  fs.writeFile('archivo_modificado.txt', newData, (err) => {
    if (err) {
      console.error('Error:', err)
      return
    }
    console.log('Archivo modificado con éxito!')
  })
})
