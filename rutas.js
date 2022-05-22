const express = require('express');
const router = express.Router();

//rutas
router.get('/', (req, res) => {
    //res.end('<h1>Hola Mundo</h1>');
    res.render('index.ejs');
});

router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.get('*', (req, res) => {
    res.end('Pagina no encontrado');
});

module.exports = router;