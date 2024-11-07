// import React from 'react';
// import Container from '@material-ui/core/Container'; // Assuming Container is from Material-UI
import { Container, Button } from "react-bootstrap";
import "../../styles/home_style.css";

const Home = () => {
  return (
    <Container>
      <h1>Welcome Home</h1>
      <p>This is the home page content.</p>
      <Button variant="primary" type="submit">
        Get Startedl
      </Button>
    </Container>
  );
};

export default Home;
