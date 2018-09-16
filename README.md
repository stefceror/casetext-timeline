# Webpack Simple Boilerplate
This project is using [JazzBrotha's webpack-simple-boilerplate](https://github.com/JazzBrotha/webpack-simple-boilerplate) as a base configuration for webpack.

## Instructions

* Clone this repository.

* Install all dependencies for your project:

```bash
npm install
```

* For development:

```bash
npm run dev
```
* For production:

```bash
npm run build
```

## App set up

* `dist` - Production folder. One root file in `index.html` linked to your entire app in form of `bundle.min.js`.
* `src` - Development folder.
    - `index.ejs` - Write all your html here.
    - `js` - All unconverted `js`-files.
    - `scss` - All unconverted `scss`-files.
* `webpack.config.babel.js` - Your app's config file. More instructions of the set up in here.
* `package.json` - All the dependencies for the project listed.
* `.babelrc` - Babel set up. This file can be expanded to fit your needs.
