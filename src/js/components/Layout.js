import React from "react";

import Sidebar from "./Sidebar";
import Gallery from "./Gallery";
import HomePage from "./HomePage";
import Search from "./Search";
import Title from "./Title";
import Filter from "./Filter";
import Sort from "./Sort";


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "INFINITY PANEL",
      visible: true,
      searchVal: "",
    };
  }

  handleSidebarToggle(visible){
    this.setState({visible});
  }

  handleSearch(searchVal){
    this.setState(searchVal);
  }

  render() {
    return (
      <div>
        <Title onNewSearch={this.handleSearch} title={this.state.title}/>
        <Search />
        <Filter />
        <Sort />
        <div class= "content">
        <Sidebar sidebarToggle={this.handleSidebarToggle.bind(this)} visible= {this.state.visible}/>
        <Gallery />
        <HomePage />
        </div>
      </div>
    );
  }
}
