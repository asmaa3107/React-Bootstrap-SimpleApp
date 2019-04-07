import React, { Component } from "react";
import Like from "./comman/like";
import TableHeader from "./comman/tablrHeader";
class MoviesTable extends Component {
  columns = [
    {},
    { path: "title", label: "Title" },
    { path: "gerne", label: "Genres" },
    { key: "_like", label: "Likes" },
    { key: "_price", label: "Price" },
    { key: "_del" }
  ];
  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
    return (
      <table className="table table-striped text-center">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {movies.map(m => (
            <tr key={m._id}>
              <td>
                <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
              </td>
              <td> {m.title}</td>
              <td>{m.genre.name}</td>
              <td>
                <Like Liked={m.like} onClick={() => onLike(m)} />
              </td>
              <td className="text-right">124,90 €</td>
              <td className="text-right">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(m)}
                >
                  <span className="fa fa-trash-o" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
