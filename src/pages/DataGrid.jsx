import React, { useState } from 'react';
import Cards from '../components/Cards';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';

function DataGrid() {
  const filteredCapsules = useSelector((state) => state.filteredList);
  const [currentPage, setCurrentPage] = useState(1);
  const [listsPerPage] = useState(9);

  const indexOfLastList = currentPage * listsPerPage;
  const indexOfFirstList = indexOfLastList - listsPerPage;
  const currentLists = filteredCapsules.slice(indexOfFirstList, indexOfLastList);

  const paginateFront = () => {
    if (indexOfLastList <= filteredCapsules.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const paginateBack = () => {
    if (currentPage >= 2) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className='pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {currentLists &&
          currentLists.length &&
          currentLists.map((ele, index) => {
            return <Cards {...ele} index={index} key={index} />;
          })}
      </div>
      <Pagination
        listsPerPage={listsPerPage}
        totalLists={filteredCapsules.length}
        paginateBack={paginateBack}
        paginateFront={paginateFront}
        currentPage={currentPage}
      />
    </>
  );
}
export default DataGrid;
