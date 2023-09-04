import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


export const ProfileCard = () => {
    return (
        <>
            <Link to='/profileMain' className='text-decoration-none'>
                <Card style={{ width: '18rem' }} className='shadow'>
                    <Card.Img variant="top" src="hinatacovercheck.jpg" className='profile-img mb-4' />
                    {/* <Card.Img variant="top" src="logo512.png" className='profile-img-round' roundedCircle/> */}
                    <Image src="hinata.jpg" className='profile-img-round ms-2' roundedCircle />
                    <Card.Body>
                        <Card.Title className='text-primary'>Hinata Hyuga</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}
