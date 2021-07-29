import React, { Component } from "react";
import "@coreui/icons/css/coreui-icons.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./scss/style.css";
import Routing from "./Routing/Routing";
import Form from "./form/Form";

class App extends Component {
  result = (values) => {
    // console.log('result is', values);
    localStorage.setItem("user", JSON.stringify(values));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.result} />;
      </div>
    );
  }
}

export default App;
