var message = require('./app/message')

var $ = require('jquery')

console.log(message);

var h1 = $('<h1></h1>').css('color','white').text(message);
$('body').css('background','red').append(h1);
