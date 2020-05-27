

const $ = require('jquery');

var randomColor = require('randomcolor'); // import the script
var color = randomColor(); // a hex code for an attractive color
var color2 = randomColor(); // a hex code for an attractive color


const sayHello = () => console.log('Meow Meow');



sayHello();

$('body').css('background-color', color);
$('h1').css('color', color2);

