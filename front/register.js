document.getElementById('registerform').addEventListener('submit', function(e){
    e.preventDefault;

    const formdata={
        username:document.getElementById('username').value,
        password:document.getElementById('password').value,
        nombre:document.getElementById('nombre').value,
        apellido:document.getElementById('apellido').value,
        email:document.getElementById('email').value,
        telefono:document.getElementById('telefono').value,
        direccion:document.getElementById('direccion').value,
        fecha_contrato:document.getElementById('fecha_contrato').value,
        puesto:document.getElementById('puesto').value
    };
    //peticion a la aplicacion para registro
    fetch('http://localhost:3333/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
    })
    .then(res = res.json())
    .then(data => {
        console.log(data);
        if(data.success){
            localStorage.setItem('username'. formdata.username);
            localStorage.setItem('nombre', data.nombre);
            alert('Empleado registrado');
            window.location.href = 'welcome.html';
        }else{
            document.getElementById('errorMessage').textContent = 'Error al registrar';
            document.getElementById('errorMessage').style.display = 'block';
        }
    })
    .catch(err => console.error('Error ', err));
})