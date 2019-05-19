# Folders
#### ce 
Custom elements example in vanilla JS
##### shadow-dom
Shadow DOM example in vanilla JS.
#### ng-element
Using Angualr elements to convert angular component into custom element

# using-ng-element
Using the produced custom element from ng-element folder into various frameworks.
## dist
folder containing distributed angular element file as ng-element.js
## React
Demo react app using custom element from ng-element.js
## Vue
Demo Vue app using custom element from ng-element.js
## Vanilla
Demo using custom element from ng-element.js without any framework

# Building custom element
From the  ng-element folder run npm install then npm run build:elements, this will build and but the final js file in using-ng-element/dist folder
# Using the custom element in various frameworks
Click on index.html files for various frameworks, or , do npm install and then npm start to have a http-server hosting the folder.
Vue is setup using vue cli, npm start in Vue folder will start the demo in Vue.
For it to work, ng-elements.js needs to be copied into assets or public folder.