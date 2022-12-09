const connectionBd = require('../database/connectionBd')
const queryBd = require('../database/queryBd')


/* export const getEmpleados = async (req, res) => {
    const pool = await connectionBd.getConnection();
    const result = await pool.request().query(queryBd.queries.getAllEmpleados);

    //const resp = result.recordset;
     //res.render('empleados/findEmpleado',{resp}); 
    console.log(result)
    res.json(result.recordset);
};
 */

export const createNewEmpleado = async (req, res) => {
    const { id, nombre, apellido, email } = req.body
    try {

        const pool = await connectionBd.getConnection();
         /* const result =  * */ await pool.request()
            .input('id', connectionBd.sql.Int, id)
            .input('nombre', connectionBd.sql.VarChar, nombre)
            .input('apellido', connectionBd.sql.VarChar, apellido)
            .input('email', connectionBd.sql.VarChar, email)
            .query(queryBd.queries.addEmpleado)

        console.log(req.body)
        res.render('empleados/insert');
    } catch (error) {
        console.log(`El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
}

export const findEmpleado1 = async (req, res) => {
    const { id } = req.body
    try {
        const pool = await connectionBd.getConnection();

        const result = await pool
            .request()
            .input("id", id)
            .query(queryBd.queries.getEmpleadoById);

        const resp = result.recordset[0];
        res.render('empleados/findEmpleado', { resp });
        console.log(resp)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const updateFindEmpleado = async (req, res) => {
    const { idConsulta } = req.body
    try {
        const pool = await connectionBd.getConnection();

        const result = await pool
            .request()
            .input("id", idConsulta)
            .query(queryBd.queries.getEmpleadoById)
        const resp = result.recordset[0];
        res.render('empleados/updateEmpleado', { resp });
        console.log(resp.id)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const updateEmpleado = async (req, res) => {
    const { id, nombre, apellido, email } = req.body
    try {
        const pool = await connectionBd.getConnection();
        await pool.request()
            .input('id', connectionBd.sql.Int, id)
            .input('nombre', connectionBd.sql.VarChar, nombre)
            .input('apellido', connectionBd.sql.VarChar, apellido)
            .input('email', connectionBd.sql.VarChar, email)
            .query("UPDATE empleado SET id=@id, nombre=@nombre, apellido=@apellido, email=@email WHERE id=@id");
        console.log('Update')
        res.render('empleados/updateEmpleado');

    } catch (error) {
        console.log(`El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
}

export const deleteEmpleado = async (req, res) => {
    const { id } = req.body
    try {
        const pool = await connectionBd.getConnection();
        await pool
            .request()
            .input("id", id)
            .query('DELETE FROM empleado WHERE id=@id')
        res.render('empleados/deleteEmpleado');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const deleteFindEmpleado = async (req, res) => {
    const { idConsulta } = req.body
    try {
        const pool = await connectionBd.getConnection();

        const result = await pool
            .request()
            .input("id", idConsulta)
            .query(queryBd.queries.getEmpleadoById)
        const resp = result.recordset[0];
        res.render('empleados/deleteEmpleado', { resp });
        console.log(resp.id)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/* export const updateEmpleado1 = async (req, res) => {
    const {  nombre, apellido, email } = req.body
    const { id } = req.params;
    try {
        const pool = await connectionBd.getConnection();
        await pool.request()
            .input('id', connectionBd.sql.Int, id)
            .input('nombre', connectionBd.sql.VarChar, nombre)
            .input('apellido', connectionBd.sql.VarChar, apellido)
            .input('email', connectionBd.sql.VarChar, email)
            .query("UPDATE empleado SET id=@id, nombre=@nombre, apellido=@apellido, email=@email WHERE id=@id");
        console.log('Update')
        res.render('empleados/updateEmpleado');

    } catch (error) {
        console.log(`El error es ------>${error}`);
        res.status(500);
        res.send(error.message);
    }
}
 */