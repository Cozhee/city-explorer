import React from 'react';
import Card from 'react-bootstrap/Card'
import {Col, Row} from "react-bootstrap";

class Movie extends React.Component {
    render() {
        return (
            <>
                <Row style={{ justifyContent: 'center' }} xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                    {this.props.movieList.map((item, idx) => {
                        return (
                            <Col key={idx}>
                                <Card bg="light" text="dark" style={{ height: '100%', marginTop: 50, marginLeft: 3}}>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.overview}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Release date: {item.release_date}</Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </>
        )
    }
}

export default Movie