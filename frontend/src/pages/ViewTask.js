import { Container, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskDetails, resetState } from "../actions/taskActions";
import Loader from "../components/Loader";
import AlertMessage from "../components/AlertMessage";

const ViewTask = () => {
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

  useEffect(() => {
    dispatchForFetchingTaskDetails(fetchTaskDetails(id));
  }, [dispatchForFetchingTaskDetails]);

  useEffect(() => {
    if (success) {
      setName(task.name);
      setDescription(task.description);
    }
  }, [success]);

  return (
    <Container className="my-3">
      {loading && <Loader />}
      {error && <AlertMessage variant="danger" message={error} />}
      <LinkContainer to="/">
        <Button variant="primary">View All Tasks</Button>
      </LinkContainer>
      <br />
      <br />
      <Form>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" plcaholder="Enter Task Name" value={name} disabled/>
        </Form.Group>
        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            plcaholder="Enter Task Description"
            value={description} disabled
          />
        </Form.Group>
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

export default ViewTask;
