import React from "react";
import { ContainerQuery } from "@zeecoder/cq-demo-utils";

const css = `
.MQBackgroundChanger {
  /* This is only here to ensure the container class is outputted by postCSS */
  color: inherit;
  
  &__cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__element {
    color: #444;
    background: white;
    padding: 10px 0;
    margin: 10px;
    border: 2px solid #ccc;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  
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

const renderElement = width => (
  <div className="MQBackgroundChanger__element">{renderLabel(width)}</div>
);

const BackgroundChanger = () => (
  <ContainerQuery
    css={css}
    render={size => (
      <div className="MQBackgroundChanger">
        <div style={{ display: "flex" }}>
          <div className="MQBackgroundChanger__cell" style={{ flex: "2" }}>
            {renderElement(size ? size.width : 0)}
          </div>
          <div className="MQBackgroundChanger__cell" style={{ flex: "1" }}>
            {renderElement(size ? size.width : 0)}
          </div>
        </div>
        {renderElement(size ? size.width : 0)}
      </div>
    )}
  />
);

export default BackgroundChanger;
