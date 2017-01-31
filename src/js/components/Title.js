import React from "react";


export default class Title extends React.Component {

	toggle(e) {
		console.log("click");
		this.props.sidebarToggle(false);
	}

  render() {
  	console.log(this.props)
    return (
      <h1><span onClick={this.toggle.bind(this)} class="icon-img-logo"></span>{this.props.title}</h1>
    );
  }
}
