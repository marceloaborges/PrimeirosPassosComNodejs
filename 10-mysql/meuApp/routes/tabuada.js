var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:valor', function (req, res, next) {
    var valor = req.params.valor;
    var resultado = (valor % 2) == 0 ? valor : false;
    res.render('tabuada', { numero: resultado });
});

module.exports = router;
