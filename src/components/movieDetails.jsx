import React, { Component } from "react";

class MovieDetails extends Component {
    handleSave = () => {
     this.props.history.push("/movies");
  };
  render() {
    const { id } =this.props.match.params;

    return (
      <div>
        <h1>movie details</h1>
        <p>
          movie id : {id}
        </p>
        <input name="" id="" className="btn btn-primary" type="button" value="save" 
        onClick={this.handleSave}
        />
      </div>
    );
  }
}

export default MovieDetails;
