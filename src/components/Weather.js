import React from 'react';
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {
    render() {
        return (
            <>
                {this.props.forcast.map((item, idx) => {
                    return (
                        <Card bg="dark" text="light" key={idx} style={{ width: '10rem', maxHeight: 100, marginTop: 50, marginLeft: 3}}>
                            <Card.Body>
                                <Card.Title>{item.date}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </>
        )
    }
}

export default Weather