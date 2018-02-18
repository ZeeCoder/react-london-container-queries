import React from "react";
import { ContainerQuery } from "@zeecoder/cq-demo-utils";

const css = `
.BackgroundChanger {
  color: #444;
  background: white;
  padding: 10px 0;
  margin: 10px;
  border: 2px solid #ccc;
  
  @container (width > 320px) {
    color: white;
    /* green */
    background: #148F2C;
    border-color: #083610;
  }
  
  @container (width > 576px) {
    /* blue */
    background: #1560E8;
    border-color: #07214F;
  }
  
  &__children {
    margin-top: 10px;
  }
}
`;

const renderLabel = width => {
  if (width > 576) {
    return "I'm blue da ba dee da ba~~";
  } else if (width > 320) {
    return "Green!";
  }

  return "White.";
};

const renderChildren = props => {
  if (!props.children) {
    return null;
  }

  return <div className="BackgroundChanger__children">{props.children}</div>;
};

const BackgroundChanger = props => (
  <ContainerQuery
    css={css}
    render={size => (
      <div className="BackgroundChanger">
        {renderLabel(size ? size.width : 0)}
        {renderChildren(props)}
      </div>
    )}
  />
);

export default BackgroundChanger;
