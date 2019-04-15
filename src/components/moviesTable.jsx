import React, { Component } from "react";
import Like from "./comman/like";
import Table from "./comman/table";
class MoviesTable extends Component {
  columns = [
    {
      key: "_img",
      label: "image",
      content: m => <img src="https://dummyimage.com/50x50/55595c/fff" />
    },
    { path: "title", label: "Title" },
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
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
