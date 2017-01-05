'use strict';
import p5 from "p5";
import App from './app';

const myApp = () => new p5(App);

document.addEventListener('DOMContentLoaded', function(){
  window.App = new myApp();
});
