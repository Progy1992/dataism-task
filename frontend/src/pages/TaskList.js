// import tasks from "../tasks";
import Task from "../components/Task";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Loader from "../components/Loader";
import AlertMessage from "../components/AlertMessage";
import { fetchAllTasks, deleteTask, resetState } from "../actions/taskActions";

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const [taskList, setTaskList] = React.useState();
  const taskListResponse = useSelector((state) => state.fetchAllTasks);
  const { loading, success, error, tasks } = taskListResponse;

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      console.log(tasks);
      setTaskList(tasks);
    }
  }, [success]);

  const dispatchForDeletingTask = useDispatch();
  const { loadingDelete, successDelete, errorDelete } = useSelector(
    (state) => state.deleteTask
  );

  const deleteTaskDeleteHandle = (taskId) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      dispatchForDeletingTask(deleteTask(taskId));
      // window.location.reload();
    }
  };

  // useEffect(()=>{
  //   window.location.reload();
  // }, [successDelete])

  return (
    <Container className="my-3">
      {loading && <Loader></Loader>}
      {error && <AlertMessage variant="danger" message={error} />}
      {loadingDelete && <Loader />}
      {successDelete && (
        <AlertMessage variant="success" message={successDelete} />
      )}
      {errorDelete && <AlertMessage variant="danger" message={errorDelete} />}
      {success && (
        <>
          <Button
            variant="primary"
            onClick={(e) => (window.location.href = "/tasks/create")}
          >
            Add Task
          </Button>
          <br />
          <br />
          {!taskList && (
            <AlertMessage
              variant="info"
              message="There are no tasks available"
            />
          )}
          {taskList &&
            taskList.map((task) => (
              <Row className="mb-4">
                <Col>
                  <Task
                    key={task.id}
                    details={task}
                    onTaskDelete={deleteTaskDeleteHandle}
                  />
                </Col>
              </Row>
            ))}
        </>
      )}
    </Container>
  );
};

export default TaskList;
