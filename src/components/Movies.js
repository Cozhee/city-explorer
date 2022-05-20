import React from 'react';
import {Col, Row} from "react-bootstrap";
import Movie from './Movie'

class Movies extends React.Component {
    render() {
        return (
            <>
                <Row style={{ justifyContent: 'center' }} xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                    {this.props.movieList.map((item, idx) => {
                        return (
                            <Col key={idx}>
                                <Movie title={item.title} overview={item.overview} releaseDate={item.release_date}/>
                            </Col>
                        )
                    })}
                </Row>
            </>
        )
    }
}

export default Movies