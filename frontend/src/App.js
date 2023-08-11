import "./App.css";
import Header from "./components/Header";
import TaskList from "./pages/TaskList";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import ViewTask from "./pages/ViewTask";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<TaskList />} exact />
              <Route path="/tasks/create" element={<CreateTask />} />
              <Route path="/tasks/:id/edit" element={<EditTask />} />
              <Route path="/tasks/:id/view" element={<ViewTask />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </>
  );
};

export default App;
