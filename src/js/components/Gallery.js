import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/photos`)
      .then((pictures) => this.setState({
      	pictures: pictures.data
      }))
  }


  render() {
  		for (var i = this.state.pictures.length - 1; i >= 0; i--) {
  			console.log(this.state.pictures[i])
  		}
  	return (
      <section class = "gallery">
      	<div class= "gallery-container">
	      {this.state.pictures
	      	.sort((a, b) => (b.id-a.id) )
	      	.filter((picture, index) => (picture.albumId>0))
	      	.filter((picture, index) => (picture.title.includes("voluptatem")))
	      	.map((picture, index) => (
	        <div key={index} class="gallery-item">
	        	<img class= "gallery-item__picture" src= {picture.thumbnailUrl}/>
	        	<p class= "gallery-item__album-Id">Album ID: {picture.albumId}</p>
	        	<p class= "gallery-item__picture-Id">Photo ID: {picture.id}</p>
	        	<p class= "gallery-item__picture-title">{picture.title}</p>
	        </div>
	    	))}
	    	</div>
      </section>
    );
  }
}
