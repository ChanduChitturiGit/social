import React from 'react'
import Card from 'react-bootstrap/Card';

export const ProfileData = () => {
    return (
        <>
            <Card style={{ width: '16rem' }} className='shadow'>
                <Card.Body>
                    <Card.Title className='text-primary'>Hinata Huyga</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Hyuga clan </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <ul className='intrests ps-1' style={{ listStyleType: 'none' }}>
                        <li className='mb-3'>
                            <i class="fa-solid fa-computer fa-xl me-2  text-primary "></i>
                            <span>Web devloper</span>
                        </li>
                        <li className='mb-3'>
                            <i class="fa-solid fa-music fa-xl me-2 text-primary "></i>
                            <span>Music</span>
                        </li>
                        <li className='mb-3'>
                            <i class="fa-solid fa-person-biking fa-xl me-2 text-primary "></i>
                            <span>Bikes</span>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </>
    )
}
