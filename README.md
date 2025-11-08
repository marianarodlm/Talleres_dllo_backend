# Proyecto 01 - Backend 

## Cómo ejecutar

1. `npm install`
2. `npm run dev` (requiere nodemon) o `npm start`

Rutas registradas:

- /api/taller01/ : convertidor-temp, resolvedor, mejor-paridad, peor-paridad
- /api/taller02/ : find-max, includes, sum, missing-numbers
- /api/taller03/ : desglosar-string, two-sum, conversion-romana, descomposicion
  
## Cómo probar la API con Postman

1. Asegúrate de que el servidor esté ejecutándose:
   ```bash
   npm run dev
  Por defecto estará disponible en: http://localhost:3000
   
2. Abre Postman y crea una nueva solicitud:
- Método: POST
- URL: según la función (ver rutas registradas)
- Body: selecciona raw → tipo JSON
- Escribe un objeto con los mismos nombres de parámetros que usa la función en el código.
- Presiona Send y revisa la respuesta en formato JSON.
