import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

export const FriendsZone = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='shadow'>
                <Card.Title className='m-3 text-primary'>Friends Zone</Card.Title>
                <Card.Subtitle className="mb-4 mx-3 text-muted">Suggests...</Card.Subtitle>
                <Card.Body className='p-0 ps-2'>
                    <Card.Text>
                        <ListGroup as="ul" variant="flush" >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start w-100 p-0 py-2"
                            >
                                <div className="container-fluid">
                                    <div className="d-flex row">
                                        <div className="col-3 d-flex justify-content-center align-items-center">
                                            <Image src="kushina.jpg" className='page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-7">
                                            <span className='me-2 text-primary fw-semi-bold'>Kushina</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>Anger Management</p>
                                        </div>
                                        <div className='d-flex justify-content-end align-items-center col-2'>
                                            <span className='me-1 '>
                                                <i class="fa-regular fa-heart fa-xl"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start w-100 p-0 py-2"
                            >
                                <div className="container-fluid">
                                    <div className="d-flex row">
                                        <div className="col-3 d-flex justify-content-center align-items-center">
                                            <Image src="naruto.jpg" className='page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-7">
                                            <span className='me-2 text-primary fw-semi-bold'>Naruto</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>Ramen blogs</p>
                                        </div>
                                        <div className='d-flex justify-content-end align-items-center col-2'>
                                            <span className='me-1 '>
                                                <i class="fa-regular fa-heart fa-xl"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start w-100 p-0 py-2"
                            >
                                <div className="container-fluid">
                                    <div className="d-flex row">
                                        <div className="col-3 d-flex justify-content-center align-items-center">
                                            <Image src="kakashi.jpg" className='page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-7">
                                            <span className='me-2 text-primary fw-semi-bold'>Kakashi</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>Books</p>
                                        </div>
                                        <div className='d-flex justify-content-end align-items-center col-2'>
                                            <span className='me-1 '>
                                                <i class="fa-regular fa-heart fa-xl"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start w-100 p-0 py-2"
                            >
                                <div className="container-fluid">
                                    <div className="d-flex row">
                                        <div className="col-3 d-flex justify-content-center align-items-center">
                                            <Image src="minato.jpg" className='page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-7">
                                            <span className='me-2 text-primary fw-semi-bold'>Kushina</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>speed classes</p>
                                        </div>
                                        <div className='d-flex justify-content-end align-items-center col-2'>
                                            <span className='me-1 '>
                                                <i class="fa-regular fa-heart fa-xl"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start w-100 p-0 py-2"
                            >
                                <div className="container-fluid">
                                    <div className="d-flex row">
                                        <div className="col-3 d-flex justify-content-center align-items-center">
                                            <Image src="pain.jpg" className='page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-7">
                                            <span className='me-2 text-primary fw-semi-bold'>Nagato</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>Pain classes</p>
                                        </div>
                                        <div className='d-flex justify-content-end align-items-center col-2'>
                                            <span className='me-1 '>
                                                <i class="fa-regular fa-heart fa-xl"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
