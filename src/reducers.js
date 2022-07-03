import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchRobotsReducer = (
  state = initialStateSearch,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SEARCHFIELD:
      return {
        ...state,
        searchField: payload,
      };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobotsReducer = (
  state = initialStateRobots,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        isPending: false,
        robots: payload,
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        isPending: false,
        error: payload,
      };
    default:
      return state;
  }
};
