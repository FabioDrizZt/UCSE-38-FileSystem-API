const fs = require('fs')

if (fs.existsSync('prueba')) {
  console.log('Carpeta ya existente')
} else {
  fs.mkdir('prueba', err => {
    if (err) {
      console.error('Error creando la carpeta:', err)
      return
    }
    console.log('Carpeta creada con éxito!')
  })
}
