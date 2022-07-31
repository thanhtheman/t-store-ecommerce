import React from 'react';
import { images } from '../../images'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import { CartFill } from 'react-bootstrap-icons';
import { FcLike} from 'react-icons/fc';



const Navbar = () => {
  return (
    <>
        <Container fluid className='bg-dark text-white' >
            <Row className='align-items-center'>
                <Col>
                    <img src={images.logo}  className='w-50 text-start m-2' />
                </Col>
                <Col xs="3" md="5">
                    <h4 className='text-center m-2'>Best Price <FcLike/></h4>
                </Col>
                <Col className='text-end' >
                    <CartFill color='orange' size={27} className='m-4'  />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Navbar;