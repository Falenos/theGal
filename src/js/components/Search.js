import React from "react";

export default class Search extends React.Component {

	Search(e) {
    e.preventDefault();
		console.log(e.target.value);
		let searchVal = "lala" || e.target.value;
    this.props.onNewSearch(searchVal);
	}

  render() {
  	console.log(this.props)
    return (
			<div class="search-con">
      	<input class="search" type="text" onChange={this.Search}/>
			</div>
		);
  }
}
