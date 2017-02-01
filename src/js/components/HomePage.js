import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class HomePage extends React.Component {

  render() {
  	return (
      <section class = "main">
	    	<div class= "home">
      	<div class="top">
					<h1 class="top__title">H1 Article Main Title</h1>
					<p class="top__content">This an introduction text. It has a fixed size, and a custom line height, so you can experiment with it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium.</p>
				</div>
				<div class="middle">
					<h2 class="middle__tittle">H2 Section Heading</h2>
					<p class="middle__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.</p>
				</div>
				<div class="bottom">
					<h3 class="bottom__title">H3 Section Heading</h3>
						<p class="bottom__content bottom__content_grid">Mauris lacinia porta faucibus. Fusce eu est ac eros vulputate mollis in ac felis. Aenean commodo scelerisque mi sed imperdiet.</p>
						<p class="bottom__content bottom__content_grid">Donec at hendrerit nisi, eget vestibulum nisi. Sed sit amet magna luctus, facilisis erat quis, sagittis ligula.</p>
						<p class="bottom__content bottom__content_grid">Aenean dignissim velit quis leo consequat ultricies. Proin quis pretium justo. Vestibulum at eros nisl.</p>
						<p class="bottom__content bottom__content_grid">Fusce lobortis erat ante, eu cursus sapien molestie at. Pellentesque placerat ante diam, et euismod lacus dictum vel. Phasellus vitae sollicitudin mi.</p>
						<p class="bottom__content bottom__content_grid">Mauris lacinia porta faucibus. Fusce eu est ac eros vulputate mollis in ac felis. Aenean commodo scelerisque mi sed imperdiet.</p>
				</div>
				</div>
      </section>
    );
  }
}
