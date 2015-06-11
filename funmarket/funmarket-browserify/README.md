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

## Adding dependencies

* Frontend packages
  * `npm install jquery --save-dev`
* Backend and shared packages
  * `npm install lodash`

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
* All dependencies should be installed with **npm**.
