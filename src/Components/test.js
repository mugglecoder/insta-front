class ChildA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ["a", "b", "c", "d", "e"],
      textvalue: "",
      test: ""
    };
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handledelTodoItem = this.handledelTodoItem.bind(this);
  }
  handleChange(e) {
    this.setState({
      textvalue: e.target.value
    });
  }
  handleAddTodoItem() {
    this.state.value.push(this.state.textvalue);
    this.setState(this.state);
    this.state;
    console.log(this.state.value);
  }
  handledelTodoItem(v) {
    for (var i = 0; i < this.state.value.length; i++) {
      if (this.state.value[i] == v) {
        delete this.state.value[i];
      }
    }
    this.setState({
      value: this.state.value
    });
    console.log(this.state.value);
  }
  render() {
    let { value } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="wwww"
          className="text"
          onChange={this.handleChange}
        />
        <button className="addbutton" onClick={this.handleAddTodoItem}>
          Add Todo Item
        </button>
        {value.map(v => {
          return (
            <div>
              <h1 className="font">
                <button
                  className="allbutton"
                  onClick={this.handledelTodoItem.bind(this, v)}
                >
                  DelTodoItem
                </button>
                {v}
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}
class Container extends React.Component {
  render() {
    return <ChildA />;
  }
}

ReactDOM.render(<ChildA />, document.getElementById("app"));
