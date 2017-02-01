import React from 'react';

var Sort = React.createClass({
	propTypes: {
		value: React.PropTypes.string
	},
	getInitialState () {
		return {value: "Image Id"};
    console.log(this.value);
	},
  setValue (event) {
		this.setState({value: event.target.value});
	  console.log('selected:', event.target.value);
	},
	render: function() {
		return (
      <label class="select">
        <select value={this.state.value} onChange={this.setValue}>
          <option value="Image Id">Image Id</option>
          <option value="Album Id">Album Id</option>
          <option value="Image Title">Image Title</option>
        </select>
      </label>
		);
  }
});
module.exports = Sort;
