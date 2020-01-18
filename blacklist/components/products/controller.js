const store = require('./store');

function getProducts(id){
  
  return new Promise((resolve, reject) => {
    resolve(store.list(id));
  })
}
function getAllProducts(id){
  
  return new Promise((resolve, reject) => {
    resolve(store.adminList(id));
  })
}
function updateProduct(id,enabled){
  return new Promise(async (resolve, reject) => {
    console.log(id);
    console.log(enabled);
    if(!id || !enabled){
      reject('Invalid data');
      return false;
    }else{
      const result = await store.update(id, enabled)
        resolve(result);
    }
  })
}

module.exports = {
  getProducts,
  getAllProducts,
  updateProduct,
}