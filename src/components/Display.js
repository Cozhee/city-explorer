import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Display extends React.Component{

    render() {
        return (
            <Carousel style={{width: 500, marginTop: 50}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={this.props.map}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'black' }}>
                        <h3>{this.props.cityName}</h3>
                        <p>{this.props.longitude}</p>
                        <p>{this.props.latitude}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Display