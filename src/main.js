var message = require('./message')

var $ = require('jquery')


var style = require('./style.css');



console.log(style);

console.log(message);

var h1 = $('<h1></h1>').text(message);
$('body').css('background','red').prepend(h1);


// Vue app
