import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export const SweetMemories = () => {
    return (
        <>
            <Card style={{ width: '16rem' }} className='shadow'>
                <Card.Body>
                    <Card.Title className='text-primary'>Sweet Memories</Card.Title>
                    <Card.Subtitle className="mb-4 fw-light text-secondary">Hinata Hyuga</Card.Subtitle>
                    <div className="row">
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                        <div className="col-4">
                        <Image src="hinata.jpg" className='memories-img-round ms-2' rounded />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
