CREATE DATABASE cine;
use cine;

CREATE TABLE empleados(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(10),
    direccion VARCHAR(100),
    fecha_contrato DATE,
    puesto VARCHAR(50)
);