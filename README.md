# Boxtech 🌋

> Boxtech Global Container Database contains technical attributes of shipping containers for use in applications and automation

# Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [MSW](https://mswjs.io/)
- [react-query](https://tanstack.com/query/latest/docs/react/overview)
- Dev Tools
  - [ESLint](https://eslint.org/)
  - [Stylelint](https://stylelint.io/)
  - [Prettier](https://prettier.io/)
  - [CommitLint](https://commitlint.js.org/#/)
  - [Husky](https://typicode.github.io/husky/#/)
  - [Lint-Staged](https://github.com/okonet/lint-staged)

# TODOS

- [ ] Add react-window and generate initial grid with stub data from [BIC Global Container Database swaggerhub account](https://app.swaggerhub.com/apis/BIC-ORG/Boxtech/2.0.3#/Container/get_container__containerNumber_)

# To start development server:

run

```
pnpm dev
```

Next, open your browser and visit http://localhost:4000/. The default React project will be running on port 4000.

# Project structure

> This project is based on the [Eruption](https://github.com/eruptionjs/core) template.

This project is a simple example of a React application that uses MSW to mock API requests. All requests are mocked in the `src/__mocks__/handlers.ts` file.

To fetch data from the API, the application uses `react-query`.

The MSW files are located in the mocks folder. The `src/__mocks__/browser.ts` file is the entry point for the MSW worker. The src/mocks/handlers.ts file contains the handlers for the mocked requests.

The other related files are:

- `src/services`: the file that contains an axios instance to fetch data from the API.
- `src/hooks` : the file that contains the useQuery hook to fetch data from the API.
- `src/components/HLTVMatches`: the file that contains the component that renders the fetched data.

## Using with Docker

Pre-requisites:

- Install [Docker](https://www.docker.com/get-docker) for your platform.
- Install [docker-compose](https://docs.docker.com/compose/install/) for your platform.

### Try with Docker

Making sure you're in your project directory, run:

```bash
docker-compose -f docker-compose-dev.yml up
```

### Using on Production with Docker

DISCLAIMER: This Docker configuration is for demonstration purposes only. If you plan to use this configuration in a production remember to adjust the Dockerfile for your project's needs!

Making sure you're in your project directory, run:

```bash
docker-compose -f docker-compose.yml up
```

_By default it uses port 80_

The production Dockerfile uses an nginx instance to run the built website, for more configuration options, see [nginx's dockerhub page](https://hub.docker.com/_/nginx)

# Commits

This project have commits configured to follow the Conventional Commits's best practice and it's configured with ESLint, Prettier and Stylelint.

To commit, you must follow the convention `<type>[optional scope]: <description>`. In practice, it would be as follow:

```git
git commit -m "feat: add button component"
```

Then, Husky will start the pre-commit hook and run lint-staged, who will run `prettier`, `lint` and `stylelint` to validate code format and code lint. If you fail to follow any of these validations, the commit will be aborted.

After that, if everything is validated correctly, Husky will proceed with the commit-msg hook, where it will evaluate if your commit message is following the Conventional Commit's best practice and later run the tests of your project. If any of the tests are broken, the commit will be aborted. You must fix the tests before proceed.

You can also commit your files with the help of the CLI. To do so, just run `npm run commit`. From there, the CLI will assist you in the proccess. As before: if your changes fails the validation, you must fix it before proceed.

As a best practice, it is strongly recommended that you do not skip the validations. If you need to change the way your commit messages are written, just go to file `commitlint.config.ts` and you will find there the config needed.

Check out [commitlint](https://commitlint.js.org/#/) docs to see further configurations that you can do.

# Useful links

- [How to set up a react project with vite](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-vite)
- [Adding eslint and prettier to a vitejs react project](https://dev.to/marcosdiasdev/adding-eslint-and-prettier-to-a-vitejs-react-project-2kkj)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- [How to setup MSW in a React project using Vite](https://www.raisiqueira.io/drops/vite-msw)
- [Vitest](https://vitest.dev/guide/#overview) -[A Reusable Way to Test React Components that Make Use of React Context](https://medium.com/@janesfrontenddiary/a-reusable-way-to-test-react-components-that-make-use-of-react-context-a82150344c46)
- [example-msw-vite - github repo](https://github.com/raisiqueira/example-msw-vite)

# License

MIT
