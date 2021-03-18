# Edgemony shop

A fake e-commerce with a lot of potential.

![responsive layout](docs/images/layout.svg)

# Usage

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Backend

This project uses [Mock Service Worker](https://mswjs.io/) to simulate an API backend by intercepting requests on network level (requests were made originally to https://fakestoreapi.com).

The service worker is created by `msw` into the public directory: [public/mockServiceWorker.js](./public/mockServiceWorker.js).
The file [handlers.js](./src/mocks/handlers.js) contains the API logic.

API is documented with an [OpenApi document](./docs/openapi.yml).
It's possible to see a preview of the documentations directly in Visual Studio Code using this plugin:
https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi
