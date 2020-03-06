# react-chrome-extension
Chrome Extension boilerplate with React
![diagram](https://miro.medium.com/max/1440/1*WmjsIQjG0PhC-AwFMGUX_w.png)
---
### Please note
- Assumes you are familiar with create-react-app (CRA) and building Chrome Extensions
- You want to build a fully custom Chrome Extension (e.g. not using "default_popup")
- Version: "react": "^16.12.0"

## What does this boilerplate do?
Provides a simple start for building custom Chrome Extensions using React. Leveraging CRA's 'asset-manifest.json', the Chrome background.js script can inject a React Chrome Extension into any webpage (or tab) WITHOUT ejecting CRA, changing package.json, adding customizations to webpack, etc, etc. Just a reliable boilerplate that works without customizing CRA.

The example here also includes a #shadow-dom wrapper so your Extension styles is encapsulated from colluding with the target webpage. You don't have to use it, but recommended to go this route (plenty of good articles on the web to learn more).

## Overview
1. Use CRA as you normally would do for any React project
2. From this repo... add the bits in /src/index.js so your Chrome Extension has a place to inject the React app into the DOM
3. Including /public/background.js (typical for a custom Chrome Extension), Chrome API injects the necessary React .js and .css (as compiled assets in the /build/static folder)
4. Everything in /public is requried for "the Extension" after 'yarn build' (the manifest and badge icon, etc are all here... you don't need the index.html but it's useful during dev)
5. 'chrome://extensions/' make sure your in Developer Mode and after 'yarn build', click 'load unpacked' and choose your 'build' folder
6. You should be off to the races...

Note: In step 3... Leveraging CRA's 'asset-manifest.json' overcomes the issue of the hashing and chunking that React performs during 'yarn build' steps. Because everytime you compile, the React assets change filenames so it was a PITA to keep changing the hardcoded values in background.js. You can eject CRA and do a custom config for webpack or command line commands to change filenames, etc but none of these proved reliable or efficient. Nor were they easy. At least... for a joker like me :)

Read more: https://medium.com/@jessekorzan/how-to-build-advanced-chrome-extensions-with-react-c6e37ca84109
