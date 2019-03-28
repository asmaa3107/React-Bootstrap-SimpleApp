import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset,onDelete,counters} =this.props;
    return (
      <React.Fragment>
        <div>
          <button
            className="btn btn-primary btn-sm m-2"
            type="reset"
            onClick={onReset}
          >
            Reset Data
          </button>
          {counters.map(cnt => (
            <Counter
              key={cnt.id}
              counter={cnt}
              onDelete={onDelete}
              onIncreament={() => this.props.onIncrement(cnt)}
              onDecrement={() => this.props.onDecrement(cnt)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
