import React from 'react';
import { Card } from 'react-bootstrap'

class WeatherDay extends React.Component {
    render() {
        return (
            <>
                <Card bg="dark" text="light" style={{ width: '100%', marginTop: 50, marginLeft: 3}}>
                    <Card.Body>
                        <Card.Title>{this.props.date}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default WeatherDay