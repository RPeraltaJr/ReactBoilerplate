var express = require('express'); // we have access to the entire Express API

// Create our app
var app = express(); // express library

// which folder to serve (ex. 'public')
app.use(express.static('public')); // let's you add functionality to your Express app

app.listen(3000, function() { // function gets called once the server is up
  console.log('Express server is up on port 3000');
});
