// Import necessary libraries
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
    // Slick settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mt-3">
            <h2>Home</h2>
            <h2>Welcome to Our University React Site</h2>
            <p>
                Explore the boundless possibilities of learning and innovation with our university-inspired React site.
                Immerse yourself in a digital ecosystem that mirrors the vibrancy of our academic community. As you
                navigate through the captivating carousel, envision the dynamic journey that awaits you on this virtual
                campus.
            </p>
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="https://picsum.photos/seed/1/800/400" alt="Slide 1"/>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/seed/2/800/400" alt="Slide 2"/>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/seed/3/800/400" alt="Slide 3"/>
                </div>
                {/* Add more slides as needed */}
            </Slider>
            <div style={{ height: 40 }}/>
            <p>
                The slideshow captures moments of discovery, echoes of lectures, and the essence of collaboration. Each
                slide tells a story, inviting you to delve into the realms of knowledge and creativity. Whether you're a
                student, faculty member, or a curious visitor, this platform is designed to inspire, educate, and
                connect minds across the digital landscape.
            </p>
            <p>
                Join us on this exciting expedition where technology meets academia. Engage with interactive content,
                stay informed about the latest research, and embrace the spirit of continuous learning. This is more
                than a website; it's a gateway to a world where ideas flourish, and the pursuit of knowledge knows no
                bounds.
            </p>
            <Container className="mt-3">
                <h2 className="text-center mb-4">Featured Content</h2>
                <Row className="justify-content-center">
                    <Col md={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/seed/4/150/150"/>
                            <Card.Body>
                                <Card.Title>Card 1 Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtitle 1</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/seed/5/150/150"/>
                            <Card.Body>
                                <Card.Title>Card 2 Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtitle 2</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/seed/6/150/150"/>
                            <Card.Body>
                                <Card.Title>Card 3 Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Subtitle 3</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;
