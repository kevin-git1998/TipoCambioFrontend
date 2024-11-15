# TipoCambioBackend

## Descripción
Este backend proporciona los servicios para gestionar solicitudes de tipo de cambio.

## Requisitos

- **Java 17**
- **MySQL 8**
- **Maven 3.6**

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/TipoCambioBackend.git

Configura la base de datos:

Crea la base de datos en MySQL:

sql

CREATE DATABASE tipo_cambio_db;
Configura las credenciales en src/main/resources/application.properties:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/tipo_cambio_db
spring.datasource.username=root
spring.datasource.password=yourpassword
Compila y ejecuta el proyecto:

bash

./mvnw clean install
./mvnw spring-boot:run