const fs = require('fs')

/* fs.writeFile('archivo.txt', 'adios mundo!', (err) => {
  if (err) throw new Error(err)
  console.log('Archivo creado y escrito con éxito')
}) */

function fileExists(path) {
  const existe = fs.existsSync(path)
  return existe
}

function crearArchivo(path, content) {
  if (fileExists(path)) {
    console.log('El archivo ya existe')
  } else {
    fs.writeFile(path, content, (err) => {
      if (err) throw new Error(err)
      console.log('Archivo creado con éxito')
    })
  }
}

crearArchivo('archivo.txt', 'Hola mundo')