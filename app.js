class GroceryListItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      done: false
    };
  }

  onListItemClick () {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };
    return (
        <li style={style} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.groceries}</li>
    );
  }

}

var App = () => (

  <div>
    <h2>Grocery List</h2>
    <GroceryListItem groceries={'Lettuce'}/>
    <GroceryListItem groceries={'Tomatoes'}/>
    <GroceryListItem groceries={'Bananas'}/>
  </div>

);

ReactDOM.render(<App />, document.getElementById('app'));