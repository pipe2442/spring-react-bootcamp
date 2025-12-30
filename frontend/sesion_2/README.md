# EJERCICIO DE PRACTICA

Una startup necesita una pequeña herramienta interna para que su equipo de RRHH pueda **registrar, editar y organizar las empresas clientes** con las que trabajan.

Tu misión es construir el primer prototipo funcional de esta herramienta usando **React + React Hook Form**.

No existe backend, pero el prototipo debe comportarse como si fuera un panel real de administración.

### Modelo de empresa

Cada empresa debe manejar la siguiente información:

| Campo | Tipo |
| --- | --- |
| name | string |
| country | string |
| employees | number |
| category | `"Startup"` | `"SME"` | `"Enterprise"` |

OJO: El campo category debe ser un <select> con estas 3 opciones.

### Funcionalidades obligatorias

- Registrar nuevas empresas
- Editar empresas existentes
- Validar todos los campos usando React Hook Form
- Mostrar errores debajo de cada input
- Limpiar el formulario al guardar
- Cambiar el botón `Create / Update` según el modo
- Mostrar listado de empresas creadas
- **No usar `querySelector` ni manipular el DOM**

### Bonus

- Filtrar empresas por categoría
- Mostrar cuántas empresas hay por cada categoría
