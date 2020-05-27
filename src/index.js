

const $ = require('jquery');

var randomColor = require('randomcolor'); // import the script
var color = randomColor(); // a hex code for an attractive color
var color2 = randomColor(); // a hex code for an attractive color


const sayHello = () => console.log('Meow Meow');



sayHello();

$('body').css('background-color', color);
$('h1').css('color', color2);


//import way of doing things

// import {hello} from './say-hello.js';
//
// console.log(hello());

//require way of doing things!
//
// const exportOb = require('./say-hello');
//
// console.log(exportOb);
