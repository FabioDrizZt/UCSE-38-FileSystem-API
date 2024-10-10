const fs = require('fs')

fs.appendFile('archivo2.txt', '\nAqui vengo yo !', (err) => {
    if (err) throw new Error(err)
    console.log('Se ha añadido el texto al archivo.')
})