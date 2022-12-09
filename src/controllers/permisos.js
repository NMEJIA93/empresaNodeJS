const connectionBd = require('../database/connectionBd')
const queryBd = require('../database/queryBd')

export const createNewPermiso = async (req, res) => {
  const { id_empleado, motivo_permiso, fecha_inicio, fecha_fin, observaciones } = req.body
  try {
    const pool = await connectionBd.getConnection();
    await pool.request()
      .input('id_empleado', connectionBd.sql.Int, id_empleado)
      .input('motivo_permiso', connectionBd.sql.VarChar, motivo_permiso)
      .input('fecha_inicio', connectionBd.sql.Date, fecha_inicio)
      .input('fecha_fin', connectionBd.sql.Date, fecha_fin)
      .input('observaciones', connectionBd.sql.Text, observaciones)
      .query(queryBd.queriesPermisos.addPermiso);

    console.log('Registro exitoso')

    res.render('permisos/insertPermisos')
    console.log(`observaciones = ${observaciones}  `)
  } catch (error) {
    console.log(`El error es ------>${error}`);
    res.status(500);
    res.send(error.message);
  }
}



/* router.get('/editar/:documento', async (req, res) =>{
    const {documento} = req.params;
    let pool = await sql.connect(config);
    pool.query("SELECT * FROM registro WHERE documento = '"+ documento +"' ", (error, results, fields) => {
      if (error) {
        console.log("Error: ", error);
        res.send({
          code: 400,
          failed: "Error ocurrido",
        });
      } else {
        res.render("personas/editarP",{data: results.recordset[0]});
      }
    });
  }); */


export const getPermisos = async (req, res) => {
  const { idConsulta } = req.body;
  try {
    const pool = await connectionBd.getConnection();

    const result = await pool
      .request()
      .input("id", idConsulta)
      .query('SELECT * FROM permisoEmpleado Where id_empleado = @id')
    const resp = result.recordset;
    res.render('permisos/getPermisos', { resp });
    console.log(resp)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const updateFindPermiso = async (req, res) => {
  const { idConsulta } = req.body
  try {
    const pool = await connectionBd.getConnection();
    const result = await pool
      .request()
      .input("id", idConsulta)
      .query('SELECT * FROM permisoEmpleado Where id_permiso=@id')
    const resp = result.recordset[0];
    res.render('permisos/updatePermiso', { resp });
    console.log(resp);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const updatePermiso = async (req, res) => {
  const { idPermiso, id_empleado, motivo_permiso, fecha_inicio, fecha_fin, observaciones } = req.body
  try {
    const pool = await connectionBd.getConnection();
    await pool.request()
      .input('id', idPermiso)
      .input('id_empleado', connectionBd.sql.Int, id_empleado)
      .input('motivo_permiso', connectionBd.sql.VarChar, motivo_permiso)
      .input('fecha_inicio', connectionBd.sql.Date, fecha_inicio)
      .input('fecha_fin', connectionBd.sql.Date, fecha_fin)
      .input('observaciones', connectionBd.sql.Text, observaciones)
      .query(queryBd.queriesPermisos.updatePermiso);

    console.log('Update')
    res.render('permisos/updatePermiso');
  } catch (error) {
    console.log(`El error es ------>${error}`);
    res.status(500);
    res.send(error.message);
  }

}

export const deleteFindPermiso = async (req, res) => {
  const { idConsulta } = req.body
  try {
    const pool = await connectionBd.getConnection();
    const result = await pool
      .request()
      .input("id", idConsulta)
      .query('SELECT * FROM permisoEmpleado Where id_permiso=@id')
    const resp = result.recordset[0];
    res.render('permisos/deletePermiso', { resp });
    console.log(resp);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const deletePermiso = async (req, res) => {
  const { idPermiso } = req.body
  try {
    const pool = await connectionBd.getConnection();
    const result = await pool
      .request()
      .input("id", idPermiso)
      .query('DELETE FROM permisoEmpleado Where id_permiso=@id')
    
    res.render('permisos/deletePermiso');
   
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}



