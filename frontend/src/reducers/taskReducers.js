import {
  TASK_CREATE_REQUEST,
  TASK_CREATE_SUCCESS,
  TASK_CREATE_FAILURE,
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
  TASK_LIST_FAILURE,
  TASK_DETAILS_REQUEST,
  TASK_DETAILS_SUCCESS,
  TASK_DETAILS_FAILURE,
  TASK_DETAILS_UPDATE_REQUEST,
  TASK_DETAILS_UPDATE_SUCCESS,
  TASK_DETAILS_UPDATE_FAILURE,
  TASK_DELETE_REQUEST,
  TASK_DELETE_SUCCESS,
  TASK_DELETE_FAILURE,
  RESET_STATE,
} from "../constants/taskActionConstants";

const initialState = {
  tasks: [],
};

export const createTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case TASK_CREATE_REQUEST:
      return { loadingCreate: true };
    case TASK_CREATE_SUCCESS:
      return { loadingCreate: false, successCreate: action.payload };
    case TASK_CREATE_FAILURE:
      return { loadingCreate: false, errorCreate: action.payload };
    default:
      return state;
  }
};

export const resetStateReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case RESET_STATE:
      return { ...state };
    default:
      return state;
  }
};

export const updateTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case TASK_DETAILS_UPDATE_REQUEST:
      return { loadingUpdate: true };
    case TASK_DETAILS_UPDATE_SUCCESS:
      return { loadingUpdate: false, successUpdate: action.payload };
    case TASK_DETAILS_UPDATE_FAILURE:
      return { loadingUpdate: false, errorUpdate: action.payload };
    default:
      return state;
  }
};

export const fetchAllTasksReducer = (state = {}, action) => {
  switch (action.type) {
    case TASK_LIST_REQUEST:
      return { loading: true };
    case TASK_LIST_SUCCESS:
      return { loading: false, success: true, tasks: action.payload };
    case TASK_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case TASK_DETAILS_REQUEST:
      return { loading: true };
    case TASK_DETAILS_SUCCESS:
      return { loading: false, success: true, task: action.payload };
    case TASK_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case TASK_DELETE_REQUEST:
      return { loadingDelete: true };
    case TASK_DELETE_SUCCESS:
      return { loadingDelete: false, successDelete: action.payload };
    case TASK_DELETE_FAILURE:
      return { loadingDelete: false, errorDelete: action.payload };
    default:
      return state;
  }
};
