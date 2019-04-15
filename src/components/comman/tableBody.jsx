import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  renderCells = (currentItem, col) => {
    if (col.content) return col.content(currentItem);
    return _.get(currentItem, col.path);
  };
  createKey =(item,col)=>{
      return item._id +(col.path || col.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      //using loadsh to render itemes
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
        
            {columns.map(col => (
              <td key={this.createKey(item,col)}>{this.renderCells(item, col)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
