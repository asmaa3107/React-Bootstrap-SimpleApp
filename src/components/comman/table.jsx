import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const TableComp =({ columns, data, sortColumn, onSort }) => {
    return (
    
    <table className="table table-striped text-center">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table> 
  );
};

export default TableComp;
