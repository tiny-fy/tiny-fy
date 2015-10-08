var React = require('react');

var Nav = React.createClass({
	render: function(){
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
		    		<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><a href="#">Home</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
});

module.exports = Nav;