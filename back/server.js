const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3333;

app.use(cors());
app.use(bodyparser.json());

app.get('/api/empleados', (req,res)=>{
    const query = 'SELECT * FROM empleados';
    db.query(query, (err, results)=>{
        if(err) throw err;
        res.json(results);
    });
});

app.post('/api/login', async(req,res) => {
    const {username, password} = req.body;
    const query = 'SELECT * FROM empleados WHERE username = ? AND password = ?';
    console.log(query);
    db.query(query, [username,password], (err,results) =>{
        if(err) throw err;
        if(results.length > 0){
            const user = results[0];
            res.json({success:true, nombre:user.nombre});
        }else{
            res.json({success:false})
        }
    });
    
});

app.post('/api/register', (req,res)=>{
    const {username,password,nombre, apellido,email,telefono,direccion,fecha_contrato,puesto}=req.body;
    console.log(username,' ', password);
    const query = 'INSERT INTO empleados (username,password,nombre,apellido,email,telefono,direccion,fecha_contrato,puesto) VALUES(?,?,?,?,?,?,?,?,?)';
    console.log();

    db.query(query, [username,password,nombre,apellido,email,telefono,direccion,fecha_contrato,puesto], (err, results) =>{
        if(err)throw err;
        res.json({success:true});
    });
    
});


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})
