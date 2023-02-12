import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({
  listsPerPage,
  totalLists,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'> {currentPage * listsPerPage - 8} </span>
          to
          <span className='font-medium'>
            {' '}
            {currentPage * listsPerPage <= totalLists
              ? currentPage * listsPerPage
              : totalLists}{' '}
          </span>
          of
          <span className='font-medium'> {totalLists} </span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div className='flex justify-center items-center w-full'>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a
            onClick={() => {
              paginateBack();
            }}
            href='#'
            className='btn-pink text-purple-600 relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium '
          >
            <span>Prev</span>
          </a>

          <a
            onClick={() => {
              paginateFront();
            }}
            href='#'
            className='btn-pink text-purple-600 relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium '
          >
            <span>Next</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  listsPerPage: PropTypes.string,
  totalLists: PropTypes.string,
  paginateFront: PropTypes.func,
  paginateBack: PropTypes.func,
  currentPage: PropTypes.string,
};
