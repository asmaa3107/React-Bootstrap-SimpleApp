import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = props => {
  const { itemsCount, pageSize,currentPage , onPageChange } = props;
  const pagesNumer = Math.ceil(itemsCount / pageSize);
  if (pagesNumer === 1) return null;
  const pages = _.range(1, pagesNumer + 1); 
 //console.log(currentPage);
  //install lodash.js li to help divide our array "npm i lodash"
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map(p => ( 
          <li className={p === currentPage ? 'page-item active' : 'page-item '} key={p} data-cursor='hand'>
            <a onClick={() => onPageChange(p)} className="page-link">
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount   : PropTypes.number.isRequired,
  pageSize     : PropTypes.number.isRequired,
  currentPage  : PropTypes.number.isRequired ,
  onPageChange : PropTypes.func.isRequired
};
export default Pagination;
