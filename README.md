# Using an API for Beginners

<!-- hide -->
> By [@ehiber](https://github.com/ehibe) and [contributors](https://github.com/4GeeksAcademy/using-an-api-for-beginners/graphs/contributors) at [4Geeks Academy](https://4geeksacademy.com/)

_These instructions are [available in Spanish](./README.es.md)._

This LearnPack helps students practice beginner-friendly API queries and JSON navigation with small, auto-graded JavaScript exercises.

## Before you start

You can open this project in [Codespaces](https://codespaces.new/?repo=4GeeksAcademy/using-an-api-for-beginners) or [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/using-an-api-for-beginners.git).

> Once VS Code opens, LearnPack may start automatically. If it does not, run `learnpack start` from the folder that contains `learn.json`.
> If Codespaces shows `bash: learnpack: command not found`, rebuild or recreate the container so the `.devcontainer` setup installs LearnPack, or run `npm install -g @learnpack/learnpack && learnpack plugins:install @learnpack/node@1.1.15`.

## Local installation

1. Install LearnPack globally and make sure you have Node.js 16+ available:

```bash
npm install -g @learnpack/learnpack
```

2. From the project root, start the tutorial:

```bash
learnpack start
```

3. In a second terminal, start the local practice API:

```bash
npm run api
```

In VS Code or Codespaces, the workspace is also configured to open a dedicated terminal and run `npm run api` automatically when the folder opens.

> If you are working locally, the API runs at `http://127.0.0.1:3001`.
> If you are working in Codespaces or another cloud environment, do not assume `localhost` from your own computer. Use the forwarded URL provided by the environment and pass that value as `baseUrl` when needed.

<!-- endhide -->

This tutorial teaches how to query an API with `GET` requests and extract values from realistic JSON responses using JavaScript.

## What students will practice

- Reading flat values from JSON responses.
- Accessing nested objects with dot notation.
- Accessing keys with spaces or dashes using bracket notation.
- Reading arrays and arrays of objects.
- Mixing object and array access in the same path.
- Making `GET` requests.
- Reading collection responses and item detail responses.

## Project structure

- `api/`: local API used by the exercises.
- `exercises/`: 1 welcome step plus 10 incremental exercises.
- `tests/shared/`: helpers used by each exercise test.

## Suggested workflow

1. Run `learnpack start` from the project root.
2. Run `npm run api` in a separate terminal.
3. Open an exercise folder and complete `app.js`.
4. Read the prompt carefully to decide which endpoint to call.
5. Return the expected value from `solve(baseUrl)`.
6. Use the LearnPack feedback to iterate until the test passes.

## API endpoints

- `GET /overview`
- `GET /items`
- `GET /items/:id`

## Notes

- The API is deterministic and resets every time the server restarts.
- No authentication is required.
- Postman or Thunder Client can help inspect responses while solving the exercises.

## Contributors

Thanks goes to everyone who improves these exercises with fixes, wording updates, new tests, and better learning guidance.

Contributions of any kind are welcome. If you spot an issue, feel free to open a pull request or contribute directly.

This project follows the spirit of the [all-contributors](https://allcontributors.org/) specification.

This and many other coding exercises are built for students at [4Geeks Academy](https://4geeksacademy.com/). Learn more about the [Full Stack Developer program](https://4geeksacademy.com/us/coding-bootcamp) and other learning experiences available at 4Geeks.
