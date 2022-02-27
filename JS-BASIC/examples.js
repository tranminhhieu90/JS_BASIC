const e = React.createElement;

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hieu" };
  }

  handleOnclick = () => {
    console.log("dsd");
    this.setState({
      text: "Hieu handsome",
    });
  };
  render() {
    console.log(this.props);
    return <div onClick={this.handleOnclick}>{this.state.text}</div>;
  }
}

// Find all DOM containers, and render Like buttons into them.
const domContainer = document.querySelector("#hieu");
console.log("domContainer", domContainer);
const liked = domContainer.dataset.liked;
ReactDOM.render(e(ExampleComponent, { hieu: liked }), domContainer);
