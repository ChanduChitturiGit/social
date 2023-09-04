import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export const PostBar = () => {
    return (
        <>
            <Card className='shadow '>
                <Card.Body className='d-flex'>
                    <Image src="hinata.jpg" className='profile-postcard-img ms-2' roundedCircle />
                    <span className='w-100 px-3'>
                        <div class="input-group mb-3 ms-1 ">
                            <input type="text" class="form-control " placeholder="Write something that you wanna post" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-primary" type="button" id="button-addon2">Post</button>
                        </div>
                    </span>
                </Card.Body>
            </Card>
        </>
    )
}
