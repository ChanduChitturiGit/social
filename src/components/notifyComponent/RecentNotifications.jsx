import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

export const RecentNotifications = () => {
    return (
        <>
            <Card style={{ width: '18rem' }} className='shadow'>
                <Card.Title className='m-3 text-primary'>Recent Notifications</Card.Title>
                <Card.Subtitle className="mb-4 mx-3 text-muted">Latest...</Card.Subtitle>
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
                                            <Image src="kushina.jpg" className='not-page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-9">
                                            <span className='me-2 text-dark fw-normal'>Lorem ipsum dolor sit.</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>1hr 5min ago</p>
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
                                            <Image src="kakashi.jpg" className='not-page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-9">
                                            <span className='me-2 text-dark fw-normal'>Lorem ipsum dolor sit.</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>1hr 5min ago</p>
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
                                            <Image src="minato.jpg" className='not-page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-9">
                                            <span className='me-2 text-dark fw-normal'>Lorem ipsum dolor sit.</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>1hr 5min ago</p>
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
                                            <Image src="naruto.jpg" className='not-page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-9">
                                            <span className='me-2 text-dark fw-normal'>Lorem ipsum dolor sit.</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>1hr 5min ago</p>
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
                                            <Image src="pain.jpg" className='not-page-img ms-1 me-2' roundedCircle />
                                        </div>
                                        <div className="fw-bold my-2 col-9">
                                            <span className='me-2 text-dark fw-normal'>Lorem ipsum dolor sit.</span>
                                            <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px' }}>1hr 5min ago</p>
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
