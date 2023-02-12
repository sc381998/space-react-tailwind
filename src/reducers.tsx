import { SET_CAPSULES_DATA, SET_FILTERED_CAPSULES_DATA } from './actions';

const initialData = {
  loading: false,
  list: [],
  filteredList: [],
};

export default (state = initialData, { type, payload }) => {
  switch (type) {
    case SET_CAPSULES_DATA: {
      return {
        ...state,
        list: payload,
      };
    }
    case SET_FILTERED_CAPSULES_DATA: {
      return {
        ...state,
        filteredList: payload,
      };
    }
    default:
      return state;
  }
};
