import React from "react";
import { withContainerQueryCSS } from "@zeecoder/cq-demo-utils";

const css = `
.Test {
  color: white;
  background: red;
  margin: 10px 0;
  padding: 10px 0;
  
  @container (width > 320px) {
    background: green;
  }
  
  @container (width > 576px) {
    background: blue;
  }
}
`;

const Test = () => <div className="Test">Test</div>;

export default withContainerQueryCSS(Test, css);
