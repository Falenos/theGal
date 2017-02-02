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
      <div class="app">
        <header>
          <Title onNewSearch={this.handleSearch} title={this.state.title}/>
          <Search />
          <Sort />
          <Filter />
        </header>
        <section class="sidebar">
          <Sidebar sidebarToggle={this.handleSidebarToggle.bind(this)} visible= {this.state.visible}/>
        </section>
        <section class="content">
          <HomePage />
          <Gallery />
        </section>
      </div>
    );
  }
}
