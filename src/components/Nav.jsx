import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary shadow py-3 ">
                    <Navbar.Brand> 
                        <Link to='/' className='text-decoration-none mx-4'>
                            <i class="fa-solid fa-icons fa-2xl me-4 text-primary "></i>
                            <span className='fw-bold'>Social</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to='/messages' className='text-decoration-none me-4'>
                                <span><i class="fa-solid fa-message fa-2xl text-primary"></i></span>
                            </Link>
                            <Link to='/notifications' className='text-decoration-none text-primary me-4'>
                                <span><i class="fa-solid fa-bell fa-2xl"></i></span>
                            </Link>
                            <Link to='/settings' className='text-decoration-none text-primary me-3'>
                                <i class="fa-solid fa-gear fa-2xl text-primary"></i>
                            </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Nav;