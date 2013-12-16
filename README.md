Demo Application
=============
Money management app

##Requiments
* node.js
* Bower

##Installation
Project use both Bower and npm package managers to resolve dependencies.
To run grunt and qunit in console go to root directory of project and type following command:
```javascript
npm install
```
To install all necessary libraries needed to run project in the browser, type:
```javascript
bower install
```

##Tests
To run test type following cmd in console
```javascript
grunt qunit
```
Attention! Some of component tests are problematic in PhantomJS but runs fine in browser environment

##Build
You are also able to build project by typing
```javascript
grunt concat
```

##Run
There are two ways to open project in browser. First, using `index.html` and this is production environment and
second using `index-dev.html` where all source files are loaded separately.
