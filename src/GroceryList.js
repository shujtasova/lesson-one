import { Component } from "react";

class GroceryList extends Component {
  state = {
    userInput: "",
    groceryList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Please enter an item");
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({ groceryList: listArray, userInput: "" });
    }
  }

  crossedWord(event) {
    const foodstuff = event.target;
    foodstuff.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({ groceryList: listArray });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What do you want to buy today?"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>
          <div className="container">
            <button
              className="btn btn-add"
              onClick={() => this.addItem(this.state.userInput)}
            >
              Add
            </button>
          </div>
          <div className="container">
            <ul>
              {this.state.groceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="container">
            <button
              className="btn btn-delete"
              onClick={() => this.deleteItem()}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default GroceryList;
