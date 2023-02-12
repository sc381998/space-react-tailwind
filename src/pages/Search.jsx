import React, { useEffect, useState } from 'react';
import InputSelect from '../components/InputSelect';
import { useSelector, useDispatch } from 'react-redux';
import { setCapsulesData, setFilteredCapsulesData } from '../actions';

function Search() {
  const capsules = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    status: '',
    original_launch: '',
    type: '',
  });

  useEffect(() => {
    getCapsulesData();
  }, []);

  async function getCapsulesData() {
    const url = 'https://api.spacexdata.com/v3/capsules';
    const response = await fetch(url);
    const body = await response.json();
    dispatch(setCapsulesData(body));
    dispatch(setFilteredCapsulesData(body));
  }
  const onChange = ({ target }) => {
    const { name, value } = target || {};
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    let filteredData = capsules;
    filteredData = filteredData.filter((ele) => {
      const { status, original_launch, type } = inputData || {};
      if (
        (status ? ele.status === status : true) &&
        (original_launch ? ele.original_launch === original_launch : true) &&
        (type ? ele.type === type : true)
      )
        return ele;
    });
    dispatch(setFilteredCapsulesData(filteredData));
  };

  return (
    <>
      <h1 className='text-center text-2xl'>SEARCH</h1>
      <div className='grid gap-6 mb-6 md:grid-cols-2 mt-6'>
        <InputSelect options={capsules} id='status' value={inputData.status} onChange={onChange} />
        <InputSelect
          options={capsules}
          id='original_launch'
          value={inputData.original_launch}
          onChange={onChange}
        />
      </div>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <InputSelect options={capsules} id='type' value={inputData.type} onChange={onChange} />
        <button className='btn btn-blue' onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
