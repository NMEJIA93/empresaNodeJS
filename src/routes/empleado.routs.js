
const express = require('express');
const routerEmpleado = require('../controllers/empleados');

const router = express.Router();


router.get('/empleados', (req, res) => {res.render('empleados/insert')});
router.post('/empleados', routerEmpleado.createNewEmpleado);




router.get('/empleados_find', (req, res) => {res.render('empleados/findEmpleado')});
router.post('/empleados_find', routerEmpleado.findEmpleado1);




router.get('/empleados_update', (req, res) => {res.render('empleados/updateEmpleado')});
router.post('/empleados_update', routerEmpleado.updateFindEmpleado);
router.put('/empleados_update', routerEmpleado.updateEmpleado);



router.get('/empleados_delete', (req, res) => {res.render('empleados/deleteEmpleado')});
router.post('/empleados_delete', routerEmpleado.deleteFindEmpleado);
router.delete('/empleados_delete',routerEmpleado.deleteEmpleado);






// Sin utilizar 
//router.get('/empleados/buscar', routerEmpleado.getEmpleados);
//router.post('/empleados_find', routerEmpleado.getEmpleados);
//router.get('/empleados/find/:id', routerEmpleado.findEmpleado);
//router.delete('/empleados/delete/:id',routerEmpleado.deleteEmpleado)
//router.put('/empleados_update/:id', routerEmpleado.updateEmpleado1);






module.exports = router;