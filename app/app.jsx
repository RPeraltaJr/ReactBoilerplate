// Require the dependencies for this app
var React = require('react');
var ReactDOM = require('react-dom');
// Component(s) go here

var objOne = {
  name: 'Rafael',
  location: 'New York'
};

var objTwo = {
  age: 27,
  ...objOne // spread operator (...) to add all the properties of objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
