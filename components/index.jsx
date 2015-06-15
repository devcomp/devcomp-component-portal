/** @jsx React.DOM */
'use strict'


// ##################################################
// # Style and Skin related
// ##################################################



// ##################################################
// # Load and configure libraries
// ##################################################

const React = require('../node_modules/react');

const Backbone = require('../node_modules/backbone');
Backbone.$ = $;

const _ = require('../node_modules/underscore');

require('../node_modules/react-backbone');

const PAGE = require('../node_modules/page');


// ##################################################
// # Initialize Globals
// ##################################################

var EventBus = _.clone(Backbone.Events);



// ##################################################
// # Initialize Context
// ##################################################



PAGE('*', function load(ctx) {

console.log("PAGE LOADED!", ctx.path);
//	appContext.selectedView.set(ctx.path.replace(/^\//, ""));
});
PAGE();



// ##################################################
// # Initialize UI and attach to DOM & Context
// ##################################################

$('<div id="TreeWidget"></div>').appendTo("body");

var TreeWidget = require("./02-Tree-React/index.jsx");

React.render(
  <TreeWidget/>,
  document.getElementById('TreeWidget')
);

