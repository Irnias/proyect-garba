const db = require('mongoose');
db.Promise = global.Promise;

async function connect(uri,options) {
  db.connect(uri, options)
    .then( ()=> console.log('[db] Conectada con exito.'))
    .catch( (e) => console.error('[db] Error en la coneccion', e))
}

module.exports = {
  connect
}