import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

export const Advertise = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='shadow'>
                <Card.Body>
                    <Card.Title className='text-primary'>Advertisment</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">lorem...</Card.Subtitle>
                    <Card.Text className='mb-3'>
                        <Image src="ad2.jpg" className='add-page-img ms-1 me-2'  />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
