document.addEventListener('DOMContentLoaded', function (){
   fetch('http://localhost:3333/api/empleados')
   .then(res => res.json())
   .then(data => {
    const table = document.getElementById('employeestable');
    data.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.username}</td>
            <td>${employee.nombre}</td>
            <td>${employee.apellido}</td>
            <td>${employee.email}</td>
            <td>${employee.telefono}</td>
            <td>${employee.direccion}</td>
            <td>${employee.fecha_contrato}</td>
            <td>${employee.puesto}</td>
        `;
        table.appendChild(row);
    });
   }).catch(err=>console.error(err));
});