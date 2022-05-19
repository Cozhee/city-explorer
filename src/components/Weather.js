import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'

class Weather extends React.Component {
    render() {
        return (
            <>
                <Row style={{ justifyContent: 'center' }} xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {this.props.forcast.map((item, idx) => {
                    return (
                            <Col key={idx}>
                                <Card bg="dark" text="light" style={{ width: '100%', marginTop: 50, marginLeft: 3}}>
                                    <Card.Body>
                                        <Card.Title>{item.date}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </>
        )
    }
}

<Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
</Row>

export default Weather