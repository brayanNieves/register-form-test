# Formulario de Registro – Prueba Técnica

## Objetivo

Este proyecto es un formulario de registro desarrollado en React que cumple con los siguientes requisitos:

- Validaciones en tiempo real
- Alerta con el contenido del formulario en formato JSON
- Mensaje de éxito tras envío correcto
- Estilizado con Tailwind CSS

## Tecnologías

- React + Vite – Para un desarrollo rápido y modular
- Tailwind CSS – Para un diseño limpio y moderno sin escribir CSS personalizado
- useState / useEffect – Manejo de estados y validaciones en tiempo real

## ¿Cómo funciona?

1. El usuario completa los campos requeridos.
2. El sistema valida en tiempo real:
   - Que todos los campos estén completos.
   - Que el email sea válido.
   - Que las contraseñas coincidan.
   - Contraseña robusta, número, letras y simbolos
3. Al enviar:
   - Se muestra un `alert()` con los datos del formulario en JSON.
   - Se muestra un mensaje de éxito si todo fue correcto.

## Cómo ejecutar

```bash
npm install
npm run dev
```
