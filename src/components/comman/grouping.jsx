import React, { Component } from "react";
import _ from "lodash";

const Grouping = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;

  // const allgenres =_.get(gerneName) ;

  return (
    <ul className="list-group">
      <li className="list-group-item active" data-cursor="hand">
        All Genres
      </li>
      {items.map(g => (
        <li
          data-cursor="hand"
          className={
            g === selectedItem ? "list-group-item active" : "list-group-item"
          }
          key={g[valueProperty]}
          onClick={() => onItemSelect(g)}
        >
          {g[textProperty]}
        </li>
      ))}
    </ul>
  );
};
Grouping.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default Grouping;
