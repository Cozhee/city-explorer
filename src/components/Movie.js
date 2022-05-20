import React from 'react';
import Card from 'react-bootstrap/Card'

class Movie extends React.Component {
    render() {
        return (
                <Card bg="light" text="dark" style={{ height: '100%', marginTop: 50, marginLeft: 3}}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.overview}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Release date: {this.props.releaseDate}</Card.Footer>
                </Card>
        )
    }
}

export default Movie