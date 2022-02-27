"use strict";
const e = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked comment number " + this.props.commentID;
    }

    return (
      <div>
        <button onClick={() => this.setState({ liked: true })}>Like</button>
        <div id="hieu" data-liked={this.state.liked}></div>
      </div>
    );
  }
}

// const LikeButton = (props) => {
//   const [liked, setLiked] = useState(false);
//   return liked ? (
//     <p>{`You liked comment number " ${props.commentI}`}</p>
//   ) : (
//     <div>
//       <button onClick={() => setLiked(true)}>Like</button>
//       <div id="hieu" data-liked={liked}></div>
//     </div>
//   );
// };

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll(".like_button_container").forEach((domContainer) => {
  // Read the comment ID from a data-* attribute.
  const commentID = parseInt(domContainer.dataset.commentid, 10);

  ReactDOM.render(e(LikeButton, { commentID: commentID }), domContainer);
});
