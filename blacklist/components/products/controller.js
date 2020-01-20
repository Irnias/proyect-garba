const store = require('./store');

function getProducts(id){
  
  return new Promise((resolve, reject) => {
    resolve(store.list(id));
  })
}

function getAllProducts(){
  
  return new Promise((resolve, reject) => {
    resolve(store.adminList());
  })
}

function updateProduct(id,enabled){
  return new Promise(async (resolve, reject) => {
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