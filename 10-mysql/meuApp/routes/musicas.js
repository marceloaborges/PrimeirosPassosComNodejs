var express = require('express');
var router = express.Router();

var db = require('../db');

/* GET home page. */
router.get('/', function (req, res) {
    
    res.render('musicas/index', { title: 'Musicas Cadastradas' });
    
});

router.get('/add', function (req, res, next){
    res.render('musicas/add', {title: 'Cadastro de Músicas'});
});

router.post('/', function (req, res, next){

    
});

router.get('/edit/:id', function (req, res, next){
    
});

router.put('/edit/:id', function (req, res, next){

});

router.delete('/delete/:id', function (req, res, next){

});

module.exports = router;