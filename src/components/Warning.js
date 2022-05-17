import React from 'react';
import Alert from 'react-bootstrap/Alert'

class Warning extends React.Component {
    render() {
        return (
            <Alert style={{ width: '100%', marginTop: 50 }}variant='danger'>
                {this.props.errorMessage} - You probably spelled the city name wrong!
            </Alert>
        )
    }
}

export default Warning