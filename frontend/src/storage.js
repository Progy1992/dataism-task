import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  fetchAllTasksReducer,
  fetchTaskReducer,
  createTaskReducer,
  updateTaskReducer,
  deleteTaskReducer,
  resetStateReducer,
} from "./reducers/taskReducers";

const reducer = combineReducers({
  createTask: createTaskReducer,
  updateTask: updateTaskReducer,
  deleteTask: deleteTaskReducer,
  fetchTask: fetchTaskReducer,
  fetchAllTasks: fetchAllTasksReducer,
  resetState: resetStateReducer,
});

const initialState = {
  tasks: [],
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
