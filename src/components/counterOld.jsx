// TODO: we gonna  use simple react extension to generate code using it's shortcuts
// TODO:  cc -imrc ...etc.
import React, { Component } from "react";
class CounterOld extends Component {
  //*Dynamic Controller and Data Here
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  //*view Html Template Here
  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        {/* Note -> use clasename not className becouse className in jsx is a reserved word  */}
        <span className={this.getBadgeClasses()}>{this.getval()}</span>
        <button
          type="button"
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handelIncreament}
        >
          <i className="fa fa-plus-circle" aria-hidden="true" /> Increase
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          delete
        </button>
        {/**in case you have argument to pass in event handller */}
        {/* <button
          type="button"
          className="btn btn-secondary btn-sm d-none"
          onClick={() => this.handelIncreament({ id: 1 })}
        >
          + object
        </button> */}
        {/* {this.rendetTags()} */}
      </div>
    ); //!end of return function
  } //!end of rendering function

  // you can add custom functions and use it in render return method
  handelIncreament = e => {
    this.setState({ value: this.state.value + 1 });
    console.log(e);
  };
  //loap items array
  rendetTags() {
    if (this.state.tags.length === 0) return <p>There is no Elemt</p>;
    return (
      <ul>
        {this.state.tags.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    );
  }
  getBadgeClasses() {
    let classes = "m-2 p-2 badge badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  getval() {
    const { value: value } = this.state;
    return value === 0 ? "Zero" : value;
  }
} //* end of  class

export default CounterOld;
