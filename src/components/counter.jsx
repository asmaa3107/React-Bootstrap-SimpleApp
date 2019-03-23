import React, { Component } from "react";
class Counter extends Component {
  getBadgeClasses() {
    let classes = "m-2 p-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  getval() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  //*view Html Template Here
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        <span className={classes}>{this.getval()}</span>
        <button
          type="button"
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncreament(this.props.counter)}
        >
          <i className="fa fa-plus-circle" aria-hidden="true" /> Increase
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
      </div>
    ); //!end of return function
  } //!end of rendering function
} //* end of  class

export default Counter;
