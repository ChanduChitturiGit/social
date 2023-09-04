import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { ProfileMainLeft } from './ProfileMainLeft';
import { ProfileMainCenter } from './ProfileMainCenter';
import { ProfileMainRight } from './ProfileMainRight';


export const ProfileMain = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row profileMainImgRow">
                    <div className="col-12">
                        <Card style={{ width: '100%' }} className='shadow m-auto'>
                            <Card.Img variant="top" src="hinatacovercheck.jpg" className='profileMain-img' />
                            {/* <Card.Img variant="top" src="logo512.png" className='profile-img-round' roundedCircle/> */}
                            <Image src="hinata.jpg" className='profileMain-img-round ms-2 '  roundedCircle/>
                            <Card.Body className='cbody p-3 d-flex '>
                                <Card.Title className='text-primary  me-4'>Timeline</Card.Title>
                                <Card.Title className='text-primary  me-4'>About</Card.Title>
                                <Card.Title className='text-primary  me-4'>Photos</Card.Title>
                                <Card.Title className='text-primary  me-4'>Friends</Card.Title>
                                <Card.Title className='text-primary  me-4'>More</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-3 d-flex justify-content-end">
                        <ProfileMainLeft/>
                    </div>
                    <div className="col-6">
                        <ProfileMainCenter/>
                    </div>
                    <div className="col-3 d-flex justify-content-end pe-4">
                        <ProfileMainRight/>
                    </div>
                </div>
            </div>
        </>
    )
}
