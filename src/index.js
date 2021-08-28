const fetch = require("node-fetch");

async function Yoz() {
  let AkrApi = await fetch("https://api.kasimakr.com/rolimonapi");
  let JsonData = await AkrApi.json();
  return JsonData;
}

let deez = Yoz();
console.log(deez); // Promise { <pending> }

deez.then(function(result) {
  console.log(result); // "Should display the whole json data"
  console.log(result.message); // Specifically shows the message, usally if done correctly it should display "ok"
});
//console.log(deez)
//
// Docs
/**


*This code prints to the console, the first print to the console As long as the promise's results aren't resolved, it will always be marked as pending. You must call it. 
*The next print to the console prints the entire json data from the api  currently by deafult this is set to test which will return a message.
*This last one is the one that prints the message itself, this returns the message without the json format.


What the test api prints by deafult  
[1] Promise { <pending> }
[2] { message: 'OK' }
[3] OK
**/
