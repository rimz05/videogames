import React from 'react';
import { Container, Button, Row, Col, Form, Card } from 'react-bootstrap';
import '../css/game2.css';
const Game2b = () => {
  const categories = ["Horror", "Racing", "Adventure", "Action", "Casual", "Sports", "Puzzle", "Arcade"];
    const games = [
      {
        title: "Red Dead Redemption II",
        img: "Rectangle 42.png",
      },
      {
        title: "Assassin's Creed Valhalla",
        img: "Rectangle 43.png",
      },
      {
        title: "Fortnite",
        img: "Rectangle 44.png",
      },
      {
        title: "Spider-Man: Miles Morales",
        img: "Rectangle 45.png",
      },
      {
        title: "The Witcher 3: Wild Hunt",
        img: "Rectangle 46.png",
      },
      {
        title: "Forza Horizon 5",
        img: "Rectangle 47.png",
      },
    ];
  
    return (
      <div className="bg">
        
      <Container className="p-4">

        <div className="text-start m-3 d-flex justify-content-between pt-3">
          <div>
            <h3 className="text-white">Popular</h3>
          </div>
          <div>
            <Button variant="outline-light">See more</Button>
           </div>
        </div>


        <Row className="g-3">
          {games.map((game, index) => (
            <Col md={4} key={index}>
              <Card className="bg-dark text-white">
                <Card.Img src={game.img} alt={game.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    );
  };
  
export default Game2b;
