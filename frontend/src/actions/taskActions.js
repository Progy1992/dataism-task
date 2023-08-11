import axios from "axios";
import { TASK_API_ENDPOINT } from "../constants/backend";
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
  RESET_STATE
} from "../constants/taskActionConstants";

export const resetState = () => ({
  type: RESET_STATE,
});

export const createTask = (name, description) => async (dispatch) => {
  try {
    dispatch({
      type: TASK_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };
    await axios
      .post(TASK_API_ENDPOINT, { name, description }, config)
      .then((res) => {
        if (res.status === 201) {
          dispatch({
            type: TASK_CREATE_SUCCESS,
            payload: res.data.message,
          });
        } else {
          dispatch({
            type: TASK_CREATE_FAILURE,
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: TASK_CREATE_FAILURE,
          payload: err.message,
        });
      });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TASK_CREATE_FAILURE,
      payload: err.message,
    });
  }
};

export const updateTask = (taskId, name, description) => async (dispatch) => {
  try {
    dispatch({
      type: TASK_DETAILS_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };
    await axios
      .put(`${TASK_API_ENDPOINT}/${taskId}`, { name, description }, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: TASK_DETAILS_UPDATE_SUCCESS,
            payload: res.data.message,
          });
        } else {
          dispatch({
            type: TASK_DETAILS_UPDATE_FAILURE,
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: TASK_DETAILS_UPDATE_FAILURE,
          payload: err.message,
        });
      });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TASK_DETAILS_UPDATE_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchTaskDetails = (taskId) => async (dispatch) => {
  try {
    dispatch({
      type: TASK_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };
    await axios
      .get(`${TASK_API_ENDPOINT}/${taskId}`, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: TASK_DETAILS_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch({
            type: TASK_DETAILS_FAILURE,
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: TASK_DETAILS_FAILURE,
          payload: err.message,
        });
      });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TASK_DETAILS_FAILURE,
      payload: err.message,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({
      type: TASK_DELETE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };
    await axios
      .delete(`${TASK_API_ENDPOINT}/${taskId}`, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: TASK_DELETE_SUCCESS,
            payload: res.data.message,
          });
          window.location.reload();
        } else {
          dispatch({
            type: TASK_DELETE_FAILURE,
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: TASK_DELETE_FAILURE,
          payload: err.message,
        });
      });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TASK_DELETE_FAILURE,
      payload: err.message,
    });
  }
};

export const fetchAllTasks = () => async (dispatch) => {
  try {
    dispatch({
      type: TASK_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };
    await axios
      .get(TASK_API_ENDPOINT, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch({
            type: TASK_LIST_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch({
            type: TASK_LIST_FAILURE,
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message)
        dispatch({
          type: TASK_LIST_FAILURE,
          payload: err.message,
        });
      });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TASK_LIST_FAILURE,
      payload: err.message,
    });
  }
};
