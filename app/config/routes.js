var React = require('react');
var Main = require('../components/Main');
var Nav = require('../components/Nav');
var Content = require('../components/Content');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

module.exports = (
	<Route path="/" component={Main}>
		<IndexRoute component={Content} />
	</Route>
);