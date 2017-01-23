import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div class= "content">
        <Sidebar />
        <Main />
        </div>
      </div>
    );
  }
}
