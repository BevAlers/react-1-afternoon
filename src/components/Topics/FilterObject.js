import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: "Mango Tangerine",
          title: "Tree Warrior",
          age: 15
        },
        {
          name: "Jason Person",
          age: 33,
          hairColor: "blonde"
        },
        {
          name: "Mimi Smith",
          title: "President"
        }
      ],

      userInput: "hello",
      filteredEmployees: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    var employees = this.state.employees;
    var filteredEmployees = [];

    for (var i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.employees, null, 10)}{" "}
        </span>

        <input
          className="inputLine"
          value={this.state.userInput}
          onChange={e => this.handleChange(e.target.value)}
        />

        {this.state.userInput}
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees(this.state.userInput)}
        >
          {" "}
          Filter{"  "}
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(
            this.state.filteredEmployees,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}
