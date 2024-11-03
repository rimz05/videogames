import React from 'react';
import { Container, Button, Row, Col, Form, Card } from 'react-bootstrap';
import '../css/game2.css';
const Game2a = () => {
  const categories = ["Horror", "Racing", "Adventure", "Action", "Casual", "Sports", "Puzzle", "Arcade"];
    const games = [
      {
        title: "Red Dead Redemption II",
        img: "t1.png",
      },
      {
        title: "Assassin's Creed Valhalla",
        img: "t2.png",
      },
      {
        title: "Fortnite",
        img: "t3.png",
      },
      {
        title: "Spider-Man: Miles Morales",
        img: "t4.png",
      },
      {
        title: "The Witcher 3: Wild Hunt",
        img: "t5.png",
      },
      {
        title: "Forza Horizon 5",
        img: "t6.png",
      },
    ];
  
    return (
      <div className="bg">
        
      <Container className="p-4">

        <div className="text-start m-3 d-flex justify-content-between pt-3">
          <div>
            <h3 className="text-white">Trending</h3>
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
  
export default Game2a;
