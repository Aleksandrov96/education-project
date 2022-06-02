import React from 'react';
import ReactPaginate from 'react-paginate';
import { ISelectedItem } from '../../pages/Courses/interface';
import './pagination.scss';

type Props = {
  pageCount: number,
  handlePageClick: (event: ISelectedItem) => void,
};

function Paginate({ pageCount, handlePageClick }: Props) {
  return (
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName="courses__pagination"
      pageClassName="courses__pagination-item"
      pageLinkClassName="courses__pagination-link"
      previousClassName="courses__pagination-previous"
      nextClassName="courses__pagination-next"
      breakClassName="courses__pagination-break"
      activeClassName="courses__pagination-active"
    />
  );
}

export default Paginate;
