const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//Lo que recive el end user.
router.get('/', function (req,res){
  controller.getProducts(null)
    .then((productList) => {
      response.success(req, res, productList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected error', 500, e);
    })
});
//Para no traer toda la lista al end user, solo usamos esta funcion en caso de necesitar la lista completa.
router.get('/all', function (req,res){
  controller.getAllProducts()
    .then((productList) => {
      response.success(req, res, productList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected error', 500, e);
    })
});

router.get('/:id', function (req,res){
  controller.getProducts(req.params.id)
  .then((productList) => {
    response.success(req, res, productList, 200);
  })
  .catch((e) => {
    response.error(req, res, 'Unexpected error', 500, e);
  })
});



router.patch('/:id', function (req, res) {
  controller.updateProduct(req.params.id, req.body.enabled)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch( (e)=> {
      response.error(req, res, 'Error interno', 500, e);
    })
});


module.exports = router;