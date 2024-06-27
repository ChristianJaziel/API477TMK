document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('login').addEventListener('submit', function(e){
        e.preventDefault();
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
            fetch('http://localhost:3333/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
            }).then(response => response.json()).then(data => {
                if(data.success){
                    localStorage.setItem('nombre', data.nombre);
                    localStorage.setItem('username', username);
                    window.location.href = 'welcome.html';
                }else{
                    document.getElementById('errorMessage').textContent = 'Usuario o contrasenia incorrecta';
                    document.getElementById('errorMessage').style.display = 'block';
                }
            })
            .catch(error => console.error ('error', error));
        
        });
})

