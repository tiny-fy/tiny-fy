var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var HeaderImg = require('./HeaderImg');
var Nav = require('./Nav');

var Main = React.createClass({
	render: function(){
		return (
			<div className="container">
				<HeaderImg />
				<Nav />
				{this.props.children}
			</div>
		)
	}
});

module.exports = Main;