var React = require('react');
var Router = require('react-router');

var HeaderImg = React.createClass({
	render: function() {
		return (
			<div>
				<img className="img-responsive" src="https://images.unsplash.com/photo-1441448770220-76743f9e6af6?q=80&fm=jpg&s=38de76fbc0c63fb457e0389b50c9fc32" />
			</div>
		)
	}

});

module.exports = HeaderImg;