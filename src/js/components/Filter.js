import React from 'react';

var Filter = React.createClass({
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
			<div class="select-con select-con_filter">
				<label class="select-con__label select-con__label_filter">FILTER ALBUMS</label>
	      <div class="select select_filter">
	        <select value={this.state.value} onChange={this.setValue}>
	          <option value="Image Id">Image Id</option>
	          <option value="Album Id">Album Id</option>
	          <option value="Image Title">Image Title</option>
	        </select>
	      </div>
			</div>
		);
  }
});
module.exports = Filter;
