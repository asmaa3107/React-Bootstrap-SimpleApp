import React, { Component } from "react";
import TableHeader from "./comman/tableHeader";
import TableBody from "./comman/tableBody";
const Table = props => {
  const { columns, data, sortColumn, onSort } = props;

  return (
    <table className="table table-striped text-center">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
