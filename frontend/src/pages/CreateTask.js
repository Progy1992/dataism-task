import { Container, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask, resetState } from "../actions/taskActions";
import Loader from "../components/Loader";
import AlertMessage from "../components/AlertMessage";

const CreateTask = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleTaskNameChange = (e) => {
    setName(e.target.value);
  };
  const handleTaskDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const createTaskResponse = useSelector((state) => state.createTask);
  const { loadingCreate, successCreate, errorCreate } = createTaskResponse;

  const [validationMessage, setValidationMessage] = React.useState("");
  const createTaskHandler = (e) => {
    e.preventDefault();
    if (name === "" || description === "") {
      setValidationMessage("Name and description are required");
    } else {
      setValidationMessage("");
      dispatch(createTask(name, description));
    }
  };

  return (
    <Container className="my-3">
      {loadingCreate && <Loader />}
      {successCreate && (
        <AlertMessage variant="success" message={successCreate} />
      )}
      {errorCreate && <AlertMessage variant="danger" message={errorCreate} />}
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
          onClick={(e) => createTaskHandler(e)}
        >
          Add Task
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

export default CreateTask;
