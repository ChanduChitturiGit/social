import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export const PostCard = () => {
    return (
        <>
            <Card className='shadow '>
                <Card.Body>
                    <div className="container-fluid">
                        <div className="d-flex row">
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <Image src="naruto.jpg" className='postcard-img ms-2' roundedCircle />
                            </div>
                            <div className="fw-bold my-2 col-7">
                                <span className=' text-primary'>
                                    Naruto Uzumaki
                                    <p className='me-2 text-secondary fw-light' style={{ fontSize: '12px', height: 'auto' }}>1hr 6m ago</p>
                                </span>
                            </div>
                            <div className='d-flex justify-content-end align-items-center col-3'>
                                <span className='me-1 '>
                                    <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                                </span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-12">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ad dolorem inventore iste commodi! Hic officiis illum autem reprehenderit rerum?</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-12">
                                <Image src="post1.jpg" className='posted-img ms-2' />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-8 ps-4">
                                <i class="fa-regular fa-heart fa-xl"></i>
                                <span className='fw-normal ms-2 text-secondary' style={{fontSize
                                :'12px'}}>you and 54+ others</span>
                            </div>
                            <div className="col-2">
                                <i class="fa-regular fa-comment fa-xl"></i>
                                <span className='fw-normal ms-2 text-secondary' style={{fontSize
                                :'12px'}}>23</span>
                            </div>
                            <div className="col-2">
                                <i class="fa-solid fa-share-nodes fa-xl"></i>
                                <span className='fw-normal ms-2 text-secondary' style={{fontSize
                                :'12px'}}>23</span>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
