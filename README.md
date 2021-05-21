[![Netlify Status](https://api.netlify.com/api/v1/badges/60b4deac-549d-468e-aa0e-21c40505379d/deploy-status)](https://app.netlify.com/sites/beste-plakje/deploys)

# React Firebase Auth Example

React application example using [React Router](https://reacttraining.com/react-router/) and [Firebase Authentication](https://firebase.google.com/docs/auth/).

Checkout the [demo here](https://beste-plakje.netlify.app/).


![React Firebase Auth Example](https://media.giphy.com/media/o7roT3Vq8AKkJt1ZhQ/giphy.gif)


## Requirements

The following items are required to run this React application:

* [Node.js](https://nodejs.org) version 6 or higher
* [Firebase](#https://firebase.google.com/) account

## Installation

### 1. Clone the Repository

Clone this repository to your computer:

```shell
$ git clone git@github.com:risan/react-firebase-auth-example.git
```

### 2. Install the Dependencies

On your terminal, go to the project directory and install all of the required dependencies:

```shell
# Go to the project directory.
$ cd react-firebase-auth-example

# Install all of the dependencies.
$ npm install

# Or if you prefer to use Yarn.
$ yarn install
```

### 3. Configure the Firebase API Key

If you don't have the Firebase API key, you can go to their website at [firebase.google.com](https://firebase.google.com/) and create a new account for free.

Copy the `.env.dist` file:

```shell
cp ...env.dist ..env
```

Open the `.env` file and set the `REACT_APP_FIREBASE_API_KEY` with your own Firebase API key:

```
REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
```

### 4. Run the application 🎉

To run the application within the development mode, type the following command:

```shell
npm run start

# Or if you prefer to use Yarn
yarn start
```

It will start the development server. You can visit the application at [localhost:3000](http://localhost:3000). Play around with the code on `src` directory. The application will be reloaded automatically if you make any changes.

Other available commands:

```shell
# Build the application that is optimized for production.
$ npm run build

# Format the code with prettier.
$ npm run prettier
```

## License

MIT © [Risan Bagja Pradana](https://risan.io)