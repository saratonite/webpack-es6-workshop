var message = require('./message')


var specterStyle = require("spectre.css");
var style = require('./style.css');
var styleScss = require('./scss/app.scss');


var img = document.createElement('img');
img.src = require('./img/world.png');



document.querySelector('.empty').appendChild(img);
