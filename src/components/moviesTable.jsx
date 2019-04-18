import React, { Component } from "react";
import Like from "./comman/like";
import TableComp from "./comman/table";
import { Link, NavLink } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      key: "_img",
      label: "image",
      content:m=> <img src="https://dummyimage.com/50x50/55595c/fff" />      
    },
    { path: "title", label: "Title" , 
      content: m => <Link to={`/movies/${m._id}`} > {m.title} </Link> },
    { path: "genre.name", label: "Genres" },
    {
      key: "_like",
      label: "Likes",
      content: m => <Like Liked={m.like} onClick={() => this.props.onLike(m)} />
    },

    {
      key: "_del",
      content: m => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.onDelete(m)}
        >
          <span className="fa fa-trash-o" />
        </button>
      )
    }
  ];
  render() {
    const { movies,  sortColumn, onSort } = this.props;
    return (
      <div>
      <TableComp
      columns={this.columns}
      sortColumn={sortColumn}
      onSort={onSort}
      data={movies}
    />
  
   
      </div>
  );
  }
}

export default MoviesTable;
