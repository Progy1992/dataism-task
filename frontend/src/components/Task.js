import React from "react";
import { Card, Button } from "react-bootstrap";


const Task = ({ details, onTaskDelete }) => {
  return (
    <Card className="text-center">
      <Card.Header>{details.name}</Card.Header>
      <Card.Body>
        <Card.Text>{details.description}</Card.Text>
        <Button
          variant="info"
          onClick={() => (window.location.href = `/tasks/${details.id}/view`)}
        >
          View Task
        </Button>{" "}
        <Button
          variant="success"
          onClick={() => (window.location.href = `/tasks/${details.id}/edit`)}
        >
          Edit Task
        </Button>{" "}
        <Button variant="danger" onClick={() => onTaskDelete(details.id)}>
          Delete Task
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Task;
