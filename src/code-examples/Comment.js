export const css = `
/* Comment.pcss */
.Comment { /* ⬅️ recognised as the "container" */
  display: flex;
  flex-direction: column;
  
  &__user {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @container (width > 320px) {
      flex-direction: row;
    }
  }
  
  &__comment {
    text-align: center;
    margin: 20px 0 0;

    @container (width > 320px) {
      text-align: left;
      margin: 0;
    }
  }
}





`;

export const js = `
// Comment.js
import { ContainerQuery } from '@zeecoder/react-container-query';
import './Comment.pcss';
import stats from './Comment.pcss.json';

export default class Comment extends Component {
  renderReplies(size) {
    // Either render replies or the "Show replies button"
  }
  render() {
    return (
      <ContainerQuery
        stats={stats}
        render={size => (
          <div className="Comment"> {/* ⬅️ Root element matched with ".Comment" */}
            <div className="Comment__user">
              <img className="Comment__avatar" src={this.props.avatar} />
              <div className="Comment__username">{this.props.username}</div>
              <div className="Comment__userhandle">{this.props.userhandle}</div>
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
`;
