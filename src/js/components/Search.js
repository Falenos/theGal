import React from "react";

export default class Search extends React.Component {

  // getDefaultProps() {
  //   searchVal: null
  // }

	Search(e) {
    e.preventDefault();
		console.log(e.target.value);
		let searchVal = "lala" || e.target.value;
    this.props.onNewSearch(searchVal);
	}

  render() {
  	console.log(this.props)
    return (
      <input type="text" onChange={this.Search.bind(this)}/>
    );
  }
}