// import React from 'react';
// import Select from 'react-select';
//
//
// var Filter = React.createClass({
// 	displayName: 'Filter',
// 	propTypes: {
// 		label: React.PropTypes.string
// 	},
// 	getInitialState () {
// 		return {
// 			value: 'new-south-wales',
//     };
// 	},
//   getDefaultProps () {
// 		return {
// 			value: 'new-south-wales',
// 		};
// 	},
//   setValue (value) {
// 		this.setState({ value });
// 		console.log('selected:', value.label);
// 	},
//
// 	renderValue: function(option) {
// 		return <strong>{option.label}</strong>;
// 	},
// 	render: function() {
// 		var options = [
// 			{ label: 'Basic customer support'},
// 			{ label: 'Premium customer support'},
// 			{ label: 'Pro customer support'},
// 		];
// 		return (
// 			<div className="section">
// 				<h3 className="section-heading">{this.props.label}</h3>
// 				<Select
// 					onInputChange={(inputValue) => this._inputValue = inputValue}
// 					options={options}
// 					optionRenderer={this.renderOption}
// 					onChange={this.setValue}
// 					value={this.state.value}
// 					valueRenderer={this.renderValue}
// 				/>
// 			</div>
// 		);
//   }
// });
//
// module.exports = Filter;
