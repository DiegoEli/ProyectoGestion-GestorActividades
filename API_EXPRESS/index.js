const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

//Conexion a la db
const PUERTO = 3000

//Modificar la conexion para otro usuario si es necesario
const conexion = mysql.createConnection(
    {
        host: 'localhost',
        database: 'bd_centro_artesanal_ug',
        user: 'root',
        password: '123456'
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if (error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('Conexion exitosa de la API-Express')
})

// Rutas y métodos de la tabla perfil_estudiante
app.get('/perfil_estudiantes', (req, res) => {
    const query = `SELECT * FROM perfil_estudiante;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/perfil_estudiantes/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM perfil_estudiante WHERE idperfil_estudiante=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/perfil_estudiantes/agregar', (req, res) => {
    const perfilEstudiante = {
        foto_perfil: req.body.foto_perfil,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        direccion_domiciliaria: req.body.direccion_domiciliaria,
        correo_electronico: req.body.correo_electronico,
        telefono: req.body.telefono,
        nivel_educativo: req.body.nivel_educativo
    };

    const query = `INSERT INTO perfil_estudiante SET ?`;
    conexion.query(query, perfilEstudiante, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el perfil del estudiante`);
    });
});

app.put('/perfil_estudiantes/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        foto_perfil,
        cedula,
        nombre,
        apellido,
        edad,
        direccion_domiciliaria,
        correo_electronico,
        telefono,
        nivel_educativo
    } = req.body;

    const query = `UPDATE perfil_estudiante SET
        foto_perfil='${foto_perfil}',
        cedula='${cedula}',
        nombre='${nombre}',
        apellido='${apellido}',
        edad='${edad}',
        direccion_domiciliaria='${direccion_domiciliaria}',
        correo_electronico='${correo_electronico}',
        telefono='${telefono}',
        nivel_educativo='${nivel_educativo}'
        WHERE idperfil_estudiante='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el perfil del estudiante`);
    });
});

app.delete('/perfil_estudiantes/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const query = `DELETE FROM perfil_estudiante WHERE idperfil_estudiante=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);
        
        res.json(`Se eliminó correctamente el perfil del estudiante`);
    });
});

//Rutas y metodos de la tabla modulo
app.get('/modulos', (req, res) => {
    const query = `SELECT * FROM modulo;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/modulos/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM modulo WHERE idmodulo=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/modulos/agregar', (req, res) => {
    const modulo = {
        nombre_modulo: req.body.nombre_modulo,
        descripcion: req.body.descripcion
    };

    const query = `INSERT INTO modulo SET ?`;
    conexion.query(query, modulo, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el modulo`);
    });
});

app.put('/modulos/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        nombre_modulo,
        descripcion
    } = req.body;

    const query = `UPDATE modulo SET
        nombre_modulo='${nombre_modulo}',
        descripcion='${descripcion}'
        WHERE idmodulo='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el modulo`);
    });
});

app.delete('/modulos/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const query = `DELETE FROM modulo WHERE idmodulo=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);
        
        res.json(`Se eliminó correctamente el modulo`);
    });
});

//Rutas y metodos de la tabla asignatura
app.get('/asignaturas', (req, res) => {
    const query = `SELECT * FROM asignatura;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/asignaturas/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM asignatura WHERE idasignatura=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/asignaturas/agregar', (req, res) => {
    const asignatura = {
        nombre_asignatura: req.body.nombre_asignatura
    };

    const query = `INSERT INTO asignatura SET ?`;
    conexion.query(query, asignatura, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el asignatura`);
    });
});

app.put('/asignaturas/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        nombre_asignatura
    } = req.body;

    const query = `UPDATE asignatura SET
        nombre_asignatura='${nombre_asignatura}'
        WHERE idasignatura='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el asignatura`);
    });
});

app.delete('/asignaturas/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const query = `DELETE FROM asignatura WHERE idasignatura=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);
        
        res.json(`Se eliminó correctamente el asignatura`);
    });
});

//Rutas y metodos de la tabla horario_estudiante
app.get('/horario_estudiantes', (req, res) => {
    const query = `SELECT * FROM horario_estudiante;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/horario_estudiantes/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM horario_estudiante WHERE idhorario_estudiante=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/horario_estudiantes/agregar', (req, res) => {
    const horarioEstudiante = {
        lunes: req.body.lunes,
        martes: req.body.martes,
        miercoles: req.body.miercoles,
        jueves: req.body.jueves,
        viernes: req.body.viernes,
        sabado: req.body.sabado,
        domingo: req.body.domingo,
        perfil_estudiante_idperfil_estudiante: req.body.perfil_estudiante_idperfil_estudiante,
        modulo_idmodulo: req.body.modulo_idmodulo,
        asignatura_idasignatura: req.body.asignatura_idasignatura 
    };

    const query = `INSERT INTO horario_estudiante SET ?`;
    conexion.query(query, horarioEstudiante, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el horario estudiante`);
    });
});

app.put('/horario_estudiantes/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        lunes,
        martes,
        miercoles,
        jueves,
        viernes,
        sabado,
        domingo,
        perfil_estudiante_idperfil_estudiante,
        modulo_idmodulo,
        asignatura_idasignatura
    } = req.body;

    const query = `UPDATE horario_estudiante SET
        lunes='${lunes}',
        martes='${martes}',
        miercoles='${miercoles}',
        jueves='${jueves}',
        viernes='${viernes}',
        sabado='${sabado}',
        domingo='${domingo}',
        perfil_estudiante_idperfil_estudiante='${perfil_estudiante_idperfil_estudiante}',
        modulo_idmodulo='${modulo_idmodulo}',
        asignatura_idasignatura='${asignatura_idasignatura}'
        WHERE idhorario_estudiante='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el horario estudiante`);
    });
});

app.delete('/horario_estudiantes/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const query = `DELETE FROM horario_estudiante WHERE idhorario_estudiante=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);
        
        res.json(`Se eliminó correctamente el horario estudiante`);
    });
});

//Rutas y metodos de la tabla perfil_docente
app.get('/perfil_docentes', (req, res) => {
    const query = `SELECT * FROM perfil_docente;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/perfil_docentes/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM perfil_docente WHERE idperfil_docente=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/perfil_docentes/agregar', (req, res) => {
    const perfilDocente = {
        foto_perfil: req.body.foto_perfil,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido, 
        edad: req.body.edad,
        direccion_domiciliaria: req.body.direccion_domiciliaria,
        correo_electronico: req.body.correo_electronico,
        telefono: req.body.telefono
    };

    const query = `INSERT INTO perfil_docente SET ?`;
    conexion.query(query, perfilDocente, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el perfil_docente`);
    });
});

app.put('/perfil_docentes/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        foto_perfil,
        cedula,
        nombre,
        apellido,
        edad,
        direccion_domiciliaria,
        correo_electronico,
        telefono
    } = req.body;

    const query = `UPDATE perfil_docente SET
        foto_perfil='${foto_perfil}',
        cedula='${cedula}',
        nombre='${nombre}',
        apellido='${apellido}',
        edad='${edad}',
        direccion_domiciliaria='${direccion_domiciliaria}',
        correo_electronico='${correo_electronico}',
        telefono='${telefono}'
        WHERE idperfil_docente='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el perfil_docente`);
    });
});

app.delete('/perfil_docentes/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const query = `DELETE FROM perfil_docente WHERE idperfil_docente=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);
        
        res.json(`Se eliminó correctamente el perfil_docente`);
    });
});

//Rutas y metodos de la tabla salario
app.get('/salarios', (req, res) => {
    const query = `SELECT * FROM salario;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/salarios/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM salario WHERE idsalario=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/salarios/agregar', (req, res) => {
    const salario = {
        titulo: req.body.titulo,
        contrato: req.body.contrato,
        cantidad_sueldo: req.body.cantidad_sueldo,
        perfil_docente_idperfil_docente: req.body.perfil_docente_idperfil_docente
    };

    const query = `INSERT INTO salario SET ?`;
    conexion.query(query, salario, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el salario`);
    });
});

app.put('/salarios/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        titulo,
        contrato,
        cantidad_sueldo,
        perfil_docente_idperfil_docente
    } = req.body;

    const query = `UPDATE salario SET
        titulo='${titulo}',
        contrato='${contrato}',
        cantidad_sueldo='${cantidad_sueldo}',
        perfil_docente_idperfil_docente='${perfil_docente_idperfil_docente}'
        WHERE idsalario='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el salario`);
    });
});

app.delete('/salarios/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const query = `DELETE FROM salario WHERE idsalario=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);
        
        res.json(`Se eliminó correctamente el salario`);
    });
});

//Rutas y metodos de la tabla calificaciones
app.get('/calificaciones', (req, res) => {
    const query = `SELECT * FROM calificaciones;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/calificaciones/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM calificaciones WHERE idcalificaciones=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/calificaciones/agregar', (req, res) => {
    const calificacion = {
        nota_1p: req.body.nota_1p,
        nota_2p: req.body.nota_2p,
        promedio: req.body.promedio,
        perfil_docente_idperfil_docente: req.body.perfil_docente_idperfil_docente,
        perfil_estudiante_idperfil_estudiante: req.body.perfil_estudiante_idperfil_estudiante,
        modulo_idmodulo: req.body.modulo_idmodulo,
        asignatura_idasignatura: req.body.asignatura_idasignatura
    };

    const query = `INSERT INTO calificaciones SET ?`;
    conexion.query(query, calificacion, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente la calificación`);
    });
});

app.put('/calificaciones/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        nota_1p,
        nota_2p,
        promedio,
        perfil_docente_idperfil_docente,
        perfil_estudiante_idperfil_estudiante,
        modulo_idmodulo,
        asignatura_idasignatura
    } = req.body;

    const query = `UPDATE calificaciones SET
        nota_1p='${nota_1p}',
        nota_2p='${nota_2p}',
        promedio='${promedio}',
        perfil_docente_idperfil_docente='${perfil_docente_idperfil_docente}',
        perfil_estudiante_idperfil_estudiante='${perfil_estudiante_idperfil_estudiante}',
        modulo_idmodulo='${modulo_idmodulo}',
        asignatura_idasignatura='${asignatura_idasignatura}'
        WHERE idcalificaciones='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente la calificación`);
    });
});

app.delete('/calificaciones/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM calificaciones WHERE idcalificaciones=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);

        res.json(`Se eliminó correctamente la calificación`);
    });
});

//Rutas y metodos de la tabla horario_docente
app.get('/horario_docentes', (req, res) => {
    const query = `SELECT * FROM horario_docente;`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.get('/horario_docentes/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM horario_docente WHERE idhorario_docente=${id};`;
    conexion.query(query, (error, resultado) => {
        if (error) return console.error(error.message);

        if (resultado.length > 0) {
            res.json(resultado);
        } else {
            res.json(`No hay registros`);
        }
    });
});

app.post('/horario_docentes/agregar', (req, res) => {
    const horarioDocente = {
        lunes: req.body.lunes,
        martes: req.body.martes,
        miercoles: req.body.miercoles,
        jueves: req.body.jueves,
        viernes: req.body.viernes,
        sabado: req.body.sabado,
        domingo: req.body.domingo,
        perfil_docente_idperfil_docente: req.body.perfil_docente_idperfil_docente,
        modulo_idmodulo: req.body.modulo_idmodulo,
        asignatura_idasignatura: req.body.asignatura_idasignatura 
    };

    const query = `INSERT INTO horario_docente SET ?`;
    conexion.query(query, horarioDocente, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se insertó correctamente el horario docente`);
    });
});

app.put('/horario_docentes/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {
        lunes,
        martes,
        miercoles,
        jueves,
        viernes,
        sabado,
        domingo,
        perfil_docente_idperfil_docente,
        modulo_idmodulo,
        asignatura_idasignatura
    } = req.body;

    const query = `UPDATE horario_docente SET
        lunes='${lunes}',
        martes='${martes}',
        miercoles='${miercoles}',
        jueves='${jueves}',
        viernes='${viernes}',
        sabado='${sabado}',
        domingo='${domingo}',
        perfil_docente_idperfil_docente='${perfil_docente_idperfil_docente}',
        modulo_idmodulo='${modulo_idmodulo}',
        asignatura_idasignatura='${asignatura_idasignatura}'
        WHERE idhorario_docente='${id}';`;

    conexion.query(query, (error) => {
        if (error) return console.error(error.message);

        res.json(`Se actualizó correctamente el horario docente`);
    });
});

app.delete('/horario_docentes/borrar/:id', (req, res) => {
    const { id } = req.params;
    
    const query = `DELETE FROM horario_docente WHERE idhorario_docente=${id};`;
    conexion.query(query, (error) => {
        if (error) console.error(error.message);
        
        res.json(`Se eliminó correctamente el horario docente`);
    });
});
