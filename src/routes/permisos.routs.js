
const express = require('express');
const routerPermisos = require('../controllers/permisos');

const router = express.Router();

router.get('/permisos', (req, res) => {res.render('permisos/insertPermisos')});
router.post('/permisos', routerPermisos.createNewPermiso);


router.get('/permisos_listar', (req, res) => {res.render('permisos/getPermisos')});
router.post('/permisos_listar', routerPermisos.getPermisos);

router.get('/permisos_update',(req,res)=>{res.render('permisos/updatePermiso')});
router.post('/permisos_update', routerPermisos.updateFindPermiso);
router.put('/permisos_update', routerPermisos.updatePermiso);

router.get('/permisos_delete',(req,res)=>{res.render('permisos/deletePermiso')});
router.post('/permisos_delete', routerPermisos.deleteFindPermiso);
router.delete('/permisos_delete', routerPermisos.deletePermiso);

module.exports = router;