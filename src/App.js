import React, { Component } from 'react';
import ComponentList from "./components/CommentList";
import FromBox from "./components/FromBox";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <FromBox/>
          <ComponentList/>
      </div>
    );
  }
}

export default App;
