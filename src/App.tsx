import "./styles.css";
import { Component } from "react";

submitForm = (event) => {
  event.preventDefault();
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <form onClick={this.submitForm} className="input-form main-container">
          <div>
            <label for="text">Enter Product Name</label>
            <input type="text" id="text" />
            <br />
            <label for="number">Enter Amount</label>
            <input type="number" id="number" />
            <br />
            <label type="datetime"></label>
            <input type="datetime-local" id="datetime" />
            <br />
            <button type="submit">Add item</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
