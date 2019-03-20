// TODO: we gonna  use simple react extension to generate code using it's shortcuts
// TODO:  cc -imrc ...etc.
import React, { Component } from "react";
class Counter extends Component {
  //*Dynamic Controller and Data Here
  state = {
    count: 0,
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
          className="btn btn-secondary btn-sm"
          onClick={this.handelIncreament}
        >
          +
        </button>
        {/**in case you have argument to pass in event handller */}
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => this.handelIncreament({ id: 1 })}
        >
          + object
        </button>
        {this.rendetTags()}
      </div>
    ); //!end of return function
  } //!end of rendering function

  // you can add custom functions and use it in render return method
  handelIncreament = e => {
    this.setState({ count: this.state.count + 1 });
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  getval() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
} //* end of  class

export default Counter;
