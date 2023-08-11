import { Container, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTaskDetails,
  updateTask,
  resetState,
} from "../actions/taskActions";
import Loader from "../components/Loader";
import AlertMessage from "../components/AlertMessage";

const EditTask = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const { id } = useParams();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const dispatchForFetchingTaskDetails = useDispatch();
  const taskDetailsResponse = useSelector((state) => state.fetchTask);
  const { loading, success, error, task } = taskDetailsResponse;

  const dispatchForUpdatingTaskDetails = useDispatch();
  const updateTaskResponse = useSelector((state) => state.updateTask);
  let { loadingUpdate, successUpdate, errorUpdate } = updateTaskResponse;

  useEffect(() => {
    dispatchForFetchingTaskDetails(fetchTaskDetails(id));
  }, [dispatchForFetchingTaskDetails]);

  useEffect(() => {
    if (success) {
      setName(task.name);
      setDescription(task.description);
    }
  }, [success]);

  const handleTaskNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const [validationMessage, setValidationMessage] = React.useState("");

  const updateTaskHandle = (e) => {
    e.preventDefault();
    if (name === "" || description === "") {
      setValidationMessage("Name and description are required");
    } else {
      setValidationMessage("")
      dispatchForUpdatingTaskDetails(updateTask(id, name, description));
    }
  };

  return (
    <Container className="my-3">
      {loading && <Loader />}
      {loadingUpdate && <Loader />}
      {error && <AlertMessage variant="danger" message={error} />}
      {successUpdate && (
        <AlertMessage variant="success" message={successUpdate} />
      )}
      {errorUpdate && <AlertMessage variant="danger" message={errorUpdate} />}
      {validationMessage && (
        <AlertMessage variant="danger" message={validationMessage} />
      )}
      <LinkContainer to="/">
        <Button variant="primary">View All Tasks</Button>
      </LinkContainer>
      <br />
      <br />
      <Form>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            plcaholder="Enter Task Name"
            value={name}
            onChange={(e) => handleTaskNameChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            plcaholder="Enter Task Description"
            value={description}
            onChange={(e) => handleTaskDescriptionChange(e)}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="success"
          className="mb-3"
          onClick={(e) => updateTaskHandle(e)}
        >
          Edit Task
        </Button>{" "}
        <Button
          variant="info"
          className="mb-3"
          onClick={(e) => (window.location.href = "/")}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default EditTask;
