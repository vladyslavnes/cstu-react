import React from 'react';
import { Container, Row, Col, Card, ListGroup, Form } from 'react-bootstrap';

const Blog = () => {
    // Sample blog posts data
    const blogPosts = [
        { id: 1, title: 'Post 1', category: 'Technology', content: 'Content for Post 1' },
        { id: 2, title: 'Post 2', category: 'Travel', content: 'Content for Post 2' },
        { id: 3, title: 'Post 3', category: 'Food', content: 'Content for Post 3' },
        // Add more posts as needed
    ];

    // Sample categories for filtering
    const categories = ['All', 'Technology', 'Travel', 'Food'];

    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredPosts =
        selectedCategory === 'All' ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={8}>
                    <h2>Blog Posts</h2>
                    <Row>
                        {filteredPosts.map((post) => (
                            <Col key={post.id} md={6} className="mb-4">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>{post.content}</Card.Text>
                                    </Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Category: {post.category}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    <h2>Filter by Category</h2>
                    <Form>
                        {categories.map((category) => (
                            <Form.Check
                                key={category}
                                type="radio"
                                label={category}
                                name="categoryFilter"
                                id={category}
                                checked={selectedCategory === category}
                                onChange={() => handleCategoryChange(category)}
                            />
                        ))}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;
