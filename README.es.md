# Usando una API para Principiantes

<!-- hide -->

> Por [@ehiber](https://github.com/ehiber) y [colaboradores](https://github.com/4GeeksAcademy/getting-data-from-apis-for-beginners/graphs/contributors) de [4Geeks Academy](https://4geeksacademy.com/)

_Estas instrucciones estan [disponibles en ingles](./README.md)._

Este LearnPack ayuda a practicar consultas a APIs y navegacion de JSON con ejercicios pequenos y autoevaluados en JavaScript.

## Antes de comenzar

Puedes abrir este proyecto en [Codespaces](https://codespaces.new/?repo=4GeeksAcademy/getting-data-from-apis-for-beginners) o [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/getting-data-from-apis-for-beginners.git).

> Una vez abierto VS Code, LearnPack puede iniciar automaticamente. Si no ocurre, ejecuta `learnpack start` desde la carpeta que contiene `learn.json`.
> Si en Codespaces aparece `bash: learnpack: command not found`, reconstruye o recrea el contenedor para que `.devcontainer` instale LearnPack, o ejecuta `npm install -g @learnpack/learnpack && learnpack plugins:install @learnpack/node@1.1.15`.

## Instalacion local

1. Instala LearnPack de forma global y asegurate de tener Node.js 16+:

```bash
npm install -g @learnpack/learnpack
```

2. Desde la raiz del proyecto, inicia el tutorial:

```bash
learnpack start
```

3. En una segunda terminal, inicia la API local de practica:

```bash
npm run api
```

En VS Code o Codespaces, el workspace tambien esta configurado para abrir una terminal dedicada y ejecutar `npm run api` automaticamente al abrir la carpeta.

> Si estas trabajando en local, la API corre en `http://127.0.0.1:3001`.
> Si estas trabajando en Codespaces u otro entorno en la nube, no asumas `localhost` desde tu computadora. Usa la URL reenviada por el entorno y pasa ese valor como `baseUrl` cuando sea necesario.

<!-- endhide -->

Este tutorial ensena a consultar una API con peticiones `GET` y extraer valores desde respuestas JSON realistas usando JavaScript.

## Que practicara el estudiante

- Leer valores planos desde respuestas JSON.
- Acceder a objetos anidados con dot notation.
- Acceder a claves con espacios o guiones usando bracket notation.
- Leer arreglos y arreglos de objetos.
- Mezclar acceso por objeto y arreglo en una misma ruta.
- Hacer peticiones `GET`.
- Leer respuestas de colecciones y de detalles por recurso.

## Estructura del proyecto

- `api/`: API local usada por los ejercicios.
- `exercises/`: 1 paso de bienvenida mas 10 ejercicios incrementales.
- `tests/shared/`: helpers compartidos para los tests.

## Flujo sugerido

1. Ejecuta `learnpack start` desde la raiz del proyecto.
2. Ejecuta `npm run api` en una terminal separada.
3. Abre una carpeta de ejercicio y completa `app.js`.
4. Lee el enunciado para decidir a que endpoint llamar.
5. Retorna el valor esperado desde `solve(baseUrl)`.
6. Usa el feedback de LearnPack para iterar hasta pasar el test.

## Endpoints de la API

- `GET /overview`
- `GET /items`
- `GET /items/:id`

## Notas

- La API es deterministica y se reinicia cada vez que el servidor vuelve a arrancar.
- No requiere autenticacion.
- Postman o Thunder Client pueden ayudarte a inspeccionar las respuestas mientras resuelves los ejercicios.

---

Este y muchos otros proyectos son construidos por estudiantes como parte de los [Coding Bootcamps](https://4geeksacademy.com/) de [4Geeks Academy](https://4geeksacademy.com/). Por [@ehiber](https://github.com/ehiber) y [otros contribuidores](https://github.com/4GeeksAcademy/getting-data-from-apis-for-beginners/graphs/contributors). Encuentra más acerca de [Ingeniería de IA](https://4geeksacademy.com/es/coding-bootcamps/ingenieria-ia).
