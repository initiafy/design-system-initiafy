<p align="center" style="max-width: 217px;"><img alt="initiafy-logo" width="210" src="https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2017/12/initiafy-logo.svg"></p>


# Initiafy Design System

[![Build Status](https://semaphoreci.com/api/v1/admin-initiafy-25/design-system-initiafy/branches/master/badge.svg)](https://semaphoreci.com/admin-initiafy-25/design-system-initiafy)

### Usage

Run `npm install design-system-initiafy` to add the library to your project.

Add the file `./node_modules/design-system-initiafy/lib/styles/style.min.css` to your angular.json file.

See the [docs website](https://initiafy.github.io/design-system-initiafy/) for api.

### Contributors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

The following commands are run from the root, i.e. the same directory as this README.

#### Run development server

- Run `npm run build`

#### Build design-system-initiafy package

*Update public_api if neccessary*

- Run `npm run build-lib`

#### Publishing design-system-initiafy package in npm

*Bump package version if not already done*

- Run `npm run publish-lib`

#### To publish to GH pages

 - `npm run gh` will build the production folder

 - `npm run gh-pub` will publish the site to the url

#### Imports and local GET requests

for images that reference the assets folder, or http requests that target the assets folder, the urls begins with `'assets/...'` - just like that.
