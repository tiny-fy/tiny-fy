var React = require('react');
var Router = require('react-router');
var Nav = require('./Nav');

var Content = React.createClass({
	getInitialState: function(){
		return {
			posts: []
		}
	},
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12 col-sm-8">
					Main Column
				</div>
				<div className="col-xs-12 col-sm-4">
					Sidebar
				</div>
			</div>
		)
	}
});

module.exports = Content;