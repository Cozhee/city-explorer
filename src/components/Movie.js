import React from 'react';
import Card from 'react-bootstrap/Card'

class Movie extends React.Component {
    render() {
        return (
            <Alert style={{ width: '100%', marginTop: 50 }}variant='danger'>
                {this.props.errorMessage} - You probably spelled the city name wrong!
            </Alert>
        )
    }
}

export default Movie