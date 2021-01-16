# Webpack 4 Boilerplate Typescript/Sass with build-in option to change preprocessor (less/stylus)
![License MIT](https://img.shields.io/github/license/mwieth/Webpack-4-boilerplate-Typescript)

This Webpack 4 Boilerplate comes with 2 builds:

--> <code>npm run build:dev</code><br>
  starts dev server on <code>localhost:8080</code> with livereload, sourcemap

--> <code>npm run build:prod</code><br>
  creates prod files to <code>/dist</code> with:

  1. compiles sass/stylus/less to css <br>
  2. autoprefixer for vendor prefixes (browser compability)<br>
  3. compiles typescript to ES5 <br>
  4. minifying for css/js <br>
  5. uglyfing js code <br>
  6. hash css and js file (file versioning for browser caching -> cache busting)<br>

# Setup
```sh
git clone https://github.com/mwieth/Webpack-4-boilerplate-Typescript.git
cd Webpack-4-boilerplate-Typescript
npm install
//start dev mode
npm start
```

# Preprocessor support (default: Sass)

--> if u want to change to <strong>less</strong> run:

  1. <code>npm install less less-loader --save-dev</code>
  2. <code>npm uninstall node-sass sass-loader</code>

  3. set selectedPreprocessor in \webpack\loader.js to less

  4. change default files in styles from sass to less

--> if u want to change to <strong>stylus</strong> run:

  1. <code>npm install stylus stylus-loader --save-dev</code>
  2. <code>npm uninstall node-sass sass-loader</code>

  3. set selectedPreprocessor in \webpack\loader.js to stylus

  4. change default files in styles from sass to stylus (*.styl)

--> if u want to use the 'original' loose *.sass syntax just change the files from *.scss to *.sass and update import in index.js line 1