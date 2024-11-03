import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import '../css/game1.css';

const Game1 = () => {
  const categories = ["Horror", "Racing", "Adventure", "Action", "Casual", "Sports", "Puzzle", "Arcade"];

  return (
    <div className="game-finder d-flex align-items-center justify-content-center text-center ">
      <Container className="text-center">
        <h1 className="text-white display-4 heading">
          Find The Games You Love And The Ones You Have Never <span className="highlighted">Played.</span>
        </h1>

        <div className="categories mt-8 mb-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category === "Action" ? "primary" : "outline-light"}
              className="me-3 mb-3 category-button"
            >
              {category}
            </Button>
          ))}
        </div>

        <Form className="search-bar m-auto">
          <Form.Control
            type="text"
            placeholder="Search Games..."
            className="text-white bg-transparent border-secondary"
          />
        </Form>
      </Container>
    </div>
  );
};

export default Game1;
