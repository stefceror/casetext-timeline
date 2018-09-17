# casetext Timeline
A timeline visualization for case citations using casetext's data api

## Webpack Simple Boilerplate
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

Point your browser to http://localhost:8666

* For production:


## Todo:
- Get server build working
- Add ability to fetch data from api
- Color dots based on number of citations
- Fix hover events

## App set up

* `dist` - Production folder. One root file in `index.html` linked to your entire app in form of `bundle.min.js`.
* `src` - Development folder.
    - `index.ejs` - Write all your html here.
    - `js` - All unconverted `js`-files.
    - `scss` - All unconverted `scss`-files.
* `webpack.config.babel.js` - Your app's config file. More instructions of the set up in here.
* `package.json` - All the dependencies for the project listed.
* `.babelrc` - Babel set up. This file can be expanded to fit your needs.
