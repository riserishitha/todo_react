import { Component } from "react";
import "./App.css"
class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      storeArray: [],
    };
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleCreateInput = () => {
    const { inputValue, storeArray } = this.state;
    const spreadData = [...storeArray, inputValue];
    this.setState({ storeArray: spreadData, inputValue: "" });
  };

  filterFn = (id) => {
    const { storeArray } = this.state;
    const deleteArr = storeArray.filter((a, index) => index !== id);
    this.setState({ storeArray: deleteArr });
  };

  handleUpdate = (id) => {
    const { storeArray } = this.state;
    const enteredSentence = prompt("Enter the text you want to update.");
    const updatedArray = storeArray.map((a, index) =>
      id === index ? enteredSentence : a
    );
    this.setState({ storeArray: updatedArray });
  };

  render() {
    const { inputValue, storeArray } = this.state;

    return (
      <div className="main">
        <input
          type="text"
          placeholder="Enter data..."
          value={inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleCreateInput} className="addbtn">Add</button>
        <br />
        {storeArray.map((a, index) => (
          <div style={{ display: "flex" }} key={index} className="store">
            <h2>{a}</h2>
            <button onClick={() => this.filterFn(index)}>Delete</button>
            <button onClick={() => this.handleUpdate(index)}>Update</button>
          </div>
        ))}
      </div>
    );
  }
}

export default AppClass;
