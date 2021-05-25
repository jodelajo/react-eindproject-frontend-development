[![Netlify Status](https://api.netlify.com/api/v1/badges/60b4deac-549d-468e-aa0e-21c40505379d/deploy-status)](https://app.netlify.com/sites/beste-plakje/deploys)

# React Open Weather App with Firebase authentication

React application app using [React Router](https://reacttraining.com/react-router/), [Open Weather Map](#https://openweathermap.org/api/) and [Firebase Authentication](https://firebase.google.com/docs/auth/).

Checkout the [demo here](https://beste-plakje.netlify.app/).


![React Firebase Auth Example](https://media.giphy.com/media/o7roT3Vq8AKkJt1ZhQ/giphy.gif)


## Table of content
1. App description
2. Requirements
3. Installation
4.  Learn more


## 1.   App description
This weather application shows you the best spot for this moment in Friesland. With the Boosters you can choose which element gets more points; sun, temperature and/or wind. The app will show you the top 5 locations in a region or in Friesland.
If you click on a location, the app will show you the best café with terrace in the neighbourhood.


## 2.   Requirements

The following items are required to run this React application:

* [Firebase](#https://firebase.google.com/) account (You will only need Authentication)
* [Openweather](#https://home.openweathermap.org/users/sign_up) account (Current weather data)
* [emailjs](#https://dashboard.emailjs.com/sign-up) account (Just for contact-form)

## 3.   Installation

### 1. Clone the Repository

Clone this repository to your computer:

```shell
$ git clone https://github.com/jodelajo/react-my-app.git
```

### 2. Install the Dependencies

On your terminal, go to the project directory and install all of the required dependencies:

```shell
# Go to the project directory.
$ cd react-my-app

# Install all of the dependencies.
$ npm install

# Or if you prefer to use Yarn.
$ yarn install
```

### 3.A Configure the Firebase API Key 

If you don't have the Firebase API key, you can go to their website at [firebase.google.com](https://firebase.google.com/) and create a new account for free.

### 3.B Configure the Open Weather Map API key
If you haven't had an Open Weather Map account, signup for free [here](https://home.openweathermap.org/users/sign_up). Log in with your Open Weather Map account and get your API key [here](https://home.openweathermap.org/api_keys).

Copy the `.env.dist` file:

```shell
cp ...env.dist ..env
```

Open the `.env` file and set the `REACT_APP_FIREBASE_API_KEY` and the `REACT_APP_OPENWEATHER_API_KEY` with your own Firebase and Open Weather Map  API key:

```
REACT_APP_OPENWEATHER_API_KEY=
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

### 4. Run the application

To run the application within the development mode, type the following command:

```shell
npm run start

# Or if you prefer to use Yarn
yarn start
```

It will start the development server. You can visit the application at [localhost:3000](http://localhost:3000). Play around with the code on `src` directory. The application will be reloaded automatically if you make any changes.

Other available commands:

```shell
#Builds the app for production to the `build` folder.
$ npm run build
```
```shell
# Launches the test runner in the interactive watch mode.
$ npm test
```
```shell
# This command will remove the single build dependency from your project.
$ npm eject
```
### Note: **NPM EJECT** is a one-way operation. Once you `eject`, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##4.    Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)