# React HR Companies Admin

Pequeño panel administrativo para registrar, editar y organizar empresas clientes de una startup.

Este proyecto es un **prototipo funcional** construido con **React + React Hook Form**, pensado como herramienta interna para equipos de RRHH.

> No existe backend. Toda la información se maneja en memoria simulando un panel administrativo real.

---

## Objetivo

Construir una aplicación que permita gestionar empresas clientes con un formulario validado y una vista de listado dinámica.

---

## Modelo de Empresa

Cada empresa debe contener la siguiente información:

| Campo | Tipo |
|------|------|
| `name` | string |
| `country` | string |
| `employees` | number |
| `category` | `"Startup"` \| `"SME"` \| `"Enterprise"` |

> ⚠️ El campo **category debe ser un `<select>`** con estas tres opciones.

---

## Funcionalidades Obligatorias

- Crear nuevas empresas
- Editar empresas existentes
- Validar todos los campos usando **React Hook Form**
- Mostrar mensajes de error debajo de cada input
- Limpiar el formulario al guardar
- Cambiar el botón **Create / Update** según el modo
- Mostrar listado de empresas creadas
- ❌ **No usar `querySelector` ni manipulación directa del DOM**

---

## Bonus

- Filtrar empresas por categoría
- Mostrar el número de empresas por cada categoría

---

## Stack Tecnológico

- React
- React Hook Form
- JavaScript (ES6+)
