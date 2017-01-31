import React from "react";

// import Menu from "./Sidebar/Menu";


// export default class Sidebar extends React.Component {
//   render() {
//     return (
//       <section class = "sidebar">
//       	{this.props.visible && <Menu />}
//       </section>
//     );
//   }
// }

export default class Sidebar extends React.Component {
  render() {
      return (
      	<ul class="menu">
      		<li class="menu-item">
      			<div class="icon-ic-home"></div>
      			<h3 class="henu-item__text">Home</h3>
      		</li>
      		<li class="menu-item">
      			<div class="icon-ic-gallery"></div>
      			<h3 class="henu-item__text">Gallery</h3>
      		</li>
      		<li class="menu-item">
      			<div class="icon-ic-date"></div>
      			<h3 class="henu-item__text">Due Date</h3>
      		</li>
      		<li class="menu-item">
      			<div class="icon-ic-project"></div>
      			<h3 class="henu-item__text">Per Project</h3>
      		</li>
      		<li class="menu-item">
      			<div class="icon-ic-assign"></div>
      			<h3 class="henu-item__text">Assigned By</h3>
      		</li>
      	</ul>
    );
  }
}
