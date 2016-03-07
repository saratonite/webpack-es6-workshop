
var $ = require('jquery');
class Person {
  constructor(){
    console.log('Person Object Initialized');
    setTimeout(()=>{
      $('h1').text('Person');
    },2000);
  }

   say(){
     alert("Hello");
   }
}
export default Person;
