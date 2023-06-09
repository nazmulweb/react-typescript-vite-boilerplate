This project was bootstrapped with [Vite](https://github.com/vitejs/vite).

## Node version

Required node version >=14.17.0

## Available Scripts

In the project directory, you can run:

### `npm run lint`

Run the above command to check linter errors.<br />

### `npm run storybook`

To run the storybook.<br />

### `npm install`

To install dependencies run the above command.<br />

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Overview of directory

```base
├── app
│   └── store.ts
├── App.tsx
├── assets
├── components
│   └── routes
│       ├── AppRoute.tsx
│       ├── PrivateRoute.tsx
│       ├── PublicRoute.tsx
│       ├── styles.scss
│       └── types
│           └── approute.ts
├── configs
│   └── routes
│       ├── appRoutes.ts
│       ├── index.ts
│       ├── publicRoutes.ts
│       └── type
│           └── approute.ts
├── counterSlice.ts
├── index.scss
├── main.tsx
├── setupTests.ts
├── view
│   ├── about
│   │   ├── About.tsx
│   │   └── styles.scss
│   ├── Home.tsx
│   └── index.tsx
└── vite-env.d.ts
```

main.tsx is the main entry point of the app

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Contribution guideline

While working on this project please follow the below guidelines
the [contributing guidelines](contributing/CONTRIBUTING.md).

# Using Docker for development

## Useful commands for development workflow

##### If pulled for the first time or the package.json changed run

`docker compose build`

##### Then, run the following command to start the environment.

`docker compose up -d`

##### To see the logs of your app

`docker compose logs -f web`

##### To see and follow the logs of your tests

`docker compose logs -f test`

##### To run test

`docker compose run --rm web npm run test`

##### To see linter errors

`docker compose run --rm web npm run lint`

##### If you need to install any npm package.

`docker compose exec web npm install pacakge-name`

##### stop the containers

`docker compose down`
