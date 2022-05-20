import React from 'react';
import { Row, Col } from 'react-bootstrap'
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
    render() {
        return (
            <>
                <Row style={{ justifyContent: 'center' }} xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {this.props.forcast.map((item, idx) => {
                    return (
                        <Col key={idx}>
                            <WeatherDay  date={item.date} description={item.description}/>
                        </Col>
                        )
                    })}
                </Row>
            </>

        )
    }
}

export default Weather