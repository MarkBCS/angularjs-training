# Project template for [gulp.js](http://gulpjs.com/)
<img width="114px" height="257px" align="right" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"/>

### What it does
* [Jade](http://jade-lang.com) files to HTML
* [Stylus](http://learnboost.github.io/stylus) files to CSS
* Babel for ES6
* Serves your static files to localhost:9001
* Reloads your browser with LiveReload when files change

## Getting things up and running
- Install [Node.js](http://nodejs.org)

```
 npm install
 npm start
 open http://localhost:9001 in your browser
````

### Windows workaround (skip binary stuff)

```
    npm install --ignore-scripts
````

## CLI Commands
* npm install
    * Installs dependencies and build tools from NPM
* npm start
    * Compiles your files, starts watching files for changes, serves static files to port 9001
* npm run build
    * Builds everything
* npm test
    * Runs tests

Minification, uglification and other tasks you're expected to run before deploying your product can be made by running the build command with env variable NODE_ENV set to "production"

    NODE_ENV=production npm run build

## Development guidelines
* **public** - directory should be dedicated only to compiled/copied files from **src** - directory.
  It should be possible to delete directory completely and after **npm start** or **npm run build** everything should be as they were before the deletion.
* All backend dependencies should be installed with **npm**. Browser dependencies should be installed with **bower** or with **npm**.
