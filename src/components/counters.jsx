import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handelDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log("done delteing #", counterId);
  };
  handelIncreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(counter);
  };
  resetCounters = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
    console.log("counters reset sucessfully");
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button
            className="btn btn-primary btn-sm m-2"
            type="reset"
            onClick={this.resetCounters}
          >
            Reset Data
          </button>
          {this.state.counters.map(cnt => (
            <Counter
              key={cnt.id}
              counter={cnt}
              // value={cnt.value} id={cnt.id}
              onDelete={this.handelDelete}
              onIncreament={() => this.handelIncreament(cnt)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
