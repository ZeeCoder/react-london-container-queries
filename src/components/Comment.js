import React, { Component } from "react";
import PropTypes from "prop-types";
import { ContainerQuery } from "@zeecoder/cq-demo-utils";

const css = `
.Comment {
  display: flex;
  flex-direction: column;
  border: 1px solid #666;
  padding: 10px;
  background: #eee;
  color: black;
  
  &__user {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @container (width > 320px) {
      flex-direction: row;
    }
  }
  
  &__avatar {
    height: 100px;
    width: 100px;
    border-radius: 100%;
  }
  
  &__username {
    font-size: 40px;
    
    @container (width > 320px) {
      margin-left: 25px;
    }
  }
  
  &__userhandle {
    text-transform: lowercase;
    font-size: 30px;
    opacity: 0.8;
    
    @container (width > 320px) {
      margin-left: 10px;
    }
    
    &::before {
      content: '@';
    }
  }
  
  &__comment-wrapper {
    @container (width > 320px) {
      margin-left: 120px;
      margin-top: -15px;
    }
  }
  
  &__comment {
    font-size: 40px;
    line-height: 1.3;
    background: white;
    padding: 10px;
    font-size: 25px;
    text-align: center;
    margin: 20px 0 0;

    @container (width > 320px) {
      text-align: left;
      margin: 0;
    }
  }
  
  &__show-replies {
    background: #ccc;
    color: #333;
    font-size: 25px;
    line-height: 2;
    margin-top: 20px;
  }
  
  &__replies {
    margin-top: 20px;
  }
  
  &__reply {
    margin: 10px 0;
  }
}
`;

class Comment extends Component {
  renderReplies(size) {
    if (!this.props.children) {
      return null;
    }

    if (!size || size.width < 750) {
      return <div className="Comment__show-replies">Show replies</div>;
    }

    return (
      <div className="Comment__replies">
        {this.props.children.map((child, index) => (
          <div className="Comment__reply" key={index}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <ContainerQuery
        css={css}
        render={size => (
          <div className="Comment">
            <div className="Comment__user">
              <img className="Comment__avatar" src={this.props.avatar} />
              <div className="Comment__username">{this.props.username}</div>
              <div className="Comment__userhandle">
                {this.props.userhandle || this.props.username}
              </div>
            </div>
            <div className="Comment__comment-wrapper">
              <div className="Comment__comment">{this.props.comment}</div>
              {this.renderReplies(size)}
            </div>
          </div>
        )}
      />
    );
  }
}

Comment.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  userhandle: PropTypes.string,
  comment: PropTypes.string
};

export default Comment;
