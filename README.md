# Isobar Boilerplate
A starter base for new projects of all sizes. From single page apps, to large CMS driven projects.

## Getting Started
Pull this repo to your local and run the following.

```
npm install
```

### Prerequisities
You will need the following to be able to run this website.

* Node
* Gulp


## Development
This project is set up with `gulp`, `weback` and `browsersync` to enable smooth local development.
The following gulp tasks let you run with different configurations:

**Default** - this builds the production version to the `\dist` directory.
```
gulp
```

**Local server - dev mode** - starts `browsersync` with un-minified code for easier debugging
```
gulp serve
```

**Local server - prod mode** - starts `browsersync` with compressed code for production
```
gulp serve:prod
```

### [Full gulp task documentation](gulp/README.md)

## Deployment
To build a production ready build of the source files to the `\dist` folder run the default task
```
gulp
```

TODO: Live hosting deployment are yet to be defined.

## Built With
* Gulp
* Panini
* Handlebars
* Webpack
* SASS
* ES6
