import React from 'react'
import { Button, Form, Container } from 'react-bootstrap'

class Search extends React.Component{

    render() {
        return (
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <Form style={{ width: '50%', marginTop: 50}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search for a city</Form.Label>
                        <Form.Control onChange={this.props.updateCityName} type="text" placeholder="Ex. Portland, OR" />
                    </Form.Group>
                    <Button style={{ width: '100%' }}onClick={this.props.getCityData} variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
            </Container>

        )
    }
}

export default Search
