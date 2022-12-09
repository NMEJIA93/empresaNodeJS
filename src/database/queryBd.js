export const queries = {
    getAllEmpleados: 'select * from empleado',
    addEmpleado: 'INSERT INTO empleado (id,nombre,apellido,email) VALUES (@id, @nombre, @apellido, @email)',
    getEmpleadoById: 'SELECT * FROM empleado Where id = @id',
    updateEmpleado: 'UPDATE empleado SET id=@id nombre=@nombre, apellido=@apellido, email=@email WHERE id=@id'
}

export const queriesPermisos = {
    getAllPermisos: 'select * from permisoEmpleado',
    addPermiso: 'INSERT INTO permisoEmpleado (id_empleado,motivo,fecha_inicio,fecha_fin,observaciones) VALUES (@id_empleado, @motivo_permiso, @fecha_inicio, @fecha_fin, @observaciones)',
    getEmpleadoById: 'SELECT * FROM empleado Where id = @id',
    updatePermiso: 'UPDATE permisoEmpleado SET id_empleado=@id_empleado, motivo=@motivo_permiso,fecha_inicio=@fecha_inicio,fecha_fin=@fecha_fin,observaciones=@observaciones WHERE id_permiso=@id'
}