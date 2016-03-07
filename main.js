var message = require('./app/message')

var $ = require('jquery')


var style = require('./app/style.css');

var Person = require('./app/es6/person.es6').default;

console.log(style);

console.log(message);

var h1 = $('<h1></h1>').text(message);
$('body').css('background','red').prepend(h1);

var p = new Person();
