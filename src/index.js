 import app from './app'


app.listen(app.get('port'));

console.log(`El servidor esta escuchando por el puerto ${app.get('port')}`)


console.log('Hola mundo2') 