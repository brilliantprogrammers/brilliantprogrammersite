 
import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './images/work.svg'
import './css/Home.css'
class Home extends Component {
    render() { 
        return ( 
            <Container className="themed-container" fluid={true}>

                <Row>
                <Col >
                    <div className="col-lg-6 col-md-5 col-sm-12 pt-5 align-self-center mb-lg-5 ps-5">
                        <h1 className="display-3 fw-lighter" id="heading-1">Learn<br/> Programming</h1>
                        <p id="change-text" className=" display-5 fw-light fs-4 fw-light mt-lg-3">#Learn #Practice #Change</p>
                    </div>
                </Col>
                    <div className="col-sm-12 col-lg-6 col-md-6 p-2"><img width="100%" className="wrapper mt-3 text-center" src={ Work } alt="Programming guy"/></div>
                </Row>
            </Container>
         );
    }
}
 
export default Home;