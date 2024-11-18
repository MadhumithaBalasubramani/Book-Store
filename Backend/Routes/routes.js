// ../Server/Routes/routes.js

const express = require('express');
const {Bookname,BookGet,BookGetOne, editBook, deleteBook} = require('../controller/controller');

const router = express.Router();

router.post('/', Bookname);
router.get('/',BookGet)
router.get('/:id',BookGetOne)
router.put("/:id",editBook)
router.delete("/:id",deleteBook)
module.exports = router;
