import React, { Component } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import robo from './images/robo.svg'
import './css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub,faTwitter,faCodepen,faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

class Contact extends Component {
    render() { 
        return ( 
            <Container>
                <Row>
                <iframe id="iframe" src="https://kontactr.com/form-page/403a30bae74ecb0" title="description"/>
                </Row>
            </Container>
         );
    }
}
 
export default Contact;