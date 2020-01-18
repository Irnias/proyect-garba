const Model = require('./model');

async function getProducts(id){
  let filter = {
    enabled: true
  };
  if(id !== null){
    Object.assign(filter,{id});
  }
  const product = await Model.find(filter);
  return product;
}

//Para no traer toda la lista al end user, solo usamos esta funcion en caso de necesitar la lista completa.
async function getAllProducts(){
  const product = await Model.find();
  return product;
}

async function updateProducts(id, enabled) {
  const foundProduct = await Model.findOne({
    id: id
  })
  console.log(foundProduct);
  foundProduct.enabled = enabled;
  const newEnabled = foundProduct.save();
  return newEnabled;
}

module.exports = {
  list : getProducts,
  adminList: getAllProducts,
  update: updateProducts
}