var message = require('./message')

var $ = require('jquery')


var style = require('./style.css');
var styleScss = require('./scss/app.scss');



console.log(style);

console.log(message);

var h1 = $('<h1></h1>').text(message);
$('body').css('background','#538963').prepend(h1);

var img = document.createElement('img');
img.src = require('./img/world.png');

document.body.appendChild(img);
