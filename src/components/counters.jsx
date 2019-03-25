import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <button
            className="btn btn-primary btn-sm m-2"
            type="reset"
            onClick={this.props.onReset}
          >
            Reset Data
          </button>
          {this.props.counters.map(cnt => (
            <Counter
              key={cnt.id}
              counter={cnt}
              // value={cnt.value} id={cnt.id}
              onDelete={this.props.onDelete}
              onIncreament={() => this.props.onIncrement(cnt)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
