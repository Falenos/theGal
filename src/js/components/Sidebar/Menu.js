import React from "react";


export default class Menu extends React.Component {
  render() {
      return (
      	<ul class="menu">
      		<li class="menu-item">
      			<div class="menu-item__img"></div>
      			<h3 class="henu-item__text">Home</h3>
      		</li>
      		<li class="menu-item">
      			<div class="menu-item__img"></div>
      			<h3 class="henu-item__text">Gallery</h3>
      		</li>
      		<li class="menu-item">
      			<div class="menu-item__img"></div>
      			<h3 class="henu-item__text">Due Date</h3>
      		</li>
      		<li class="menu-item">
      			<div class="menu-item__img"></div>
      			<h3 class="henu-item__text">Per Project</h3>
      		</li>
      		<li class="menu-item">
      			<div class="menu-item__img"></div>
      			<h3 class="henu-item__text">Assigned By</h3>
      		</li>
      	</ul>
    );
  }
}