import React from "react";
import PropTypes from "prop-types";
import { withContainerQueryCSS } from "@zeecoder/cq-demo-utils";
import Resizer from "./Resizer";

const css = `
.Window {
  box-shadow: 0 0 45px black;
  border: 1px solid black;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
  margin: 0 auto;

  &__toolbar {
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(to bottom, #5B5851, #43423E);
    padding: 15px;
  }
  
  &__buttons {
    display: flex;
  }
  
  &__btn {
    border-radius: 100%;
    width: 35px;
    height: 35px;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    background: #ccc;
    color: #333;
    
    & + & {
      margin-left: 5px;
    }
  
    &--min {
    }
    
    &--max {
    }
    
    &--x {
      background: linear-gradient(to bottom, #FA816B, #FB5234);
    }
  }
  
  &__content {
    background: white;
    padding: 15px;
  }
}
`;

const renderChildren = (children, width) => {
  if (typeof children === "function") {
    return children(width);
  }

  return children;
};

const renderWindow = (children, width) => (
  <div className="Window">
    <div className="Window__toolbar">
      <div className="Window__buttons">
        <div className="Window__btn Window__btn--min">
          <i className="fa fa-window-minimize" />
        </div>
        <div className="Window__btn Window__btn--max">
          <i className="fa fa-window-maximize" />
        </div>
        <div className="Window__btn Window__btn--x">
          <i className="fa fa-times" />
        </div>
      </div>
    </div>
    <div className="Window__content">{renderChildren(children, width)}</div>
  </div>
);

const Window = props => {
  if (Array.isArray(props.width)) {
    return (
      <Resizer sequence={props.width}>
        {width => renderWindow(props.children, width)}
      </Resizer>
    );
  }

  return (
    <div style={{ width: props.width }}>{renderWindow(props.children)}</div>
  );
};

Window.defaultProps = {
  width: [320, 576, 900]
};

Window.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ])
};

export default withContainerQueryCSS(Window, css);
