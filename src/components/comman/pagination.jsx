import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pagesNumer =Math.ceil( itemsCount / pageSize );
  if (pagesNumer===1) return null;
  const pages = _.range(1, pagesNumer + 1);

  //install lodash.js li to help divide our array "npm i lodash"
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map(p => (
          <li className="page-item" key={p}>
            <a className="page-link" href="#">
             {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
