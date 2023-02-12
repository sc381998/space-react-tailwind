export const SET_CAPSULES_DATA = 'SET_CAPSULES_DATA';
export const SET_FILTERED_CAPSULES_DATA = 'SET_FILTERED_CAPSULES_DATA';

export function setCapsulesData(data) {
  return {
    type: SET_CAPSULES_DATA,
    payload: data,
  };
}

export function setFilteredCapsulesData(data) {
  return {
    type: SET_FILTERED_CAPSULES_DATA,
    payload: data,
  };
}
