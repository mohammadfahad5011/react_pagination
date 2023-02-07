import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import SearchForm from "./components/SearchForm";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/search/:keyword" element={<UserList />}></Route>
      </Routes>
      <main className="py-3">
        <Container>
          <Form />
          <SearchForm />
          <UserList />
        </Container>
      </main>
    </>
  );
}

export default App;
