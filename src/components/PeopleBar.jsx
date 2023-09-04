import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { ProfileCard } from './peopleBarComponents/ProfileCard';
import { PagesLikeCard } from './peopleBarComponents/PagesLikeCard';
import { NewsCard } from './peopleBarComponents/NewsCard';

export const PeopleBar = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end mb-4">
                        <ProfileCard />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end mb-4">
                        <PagesLikeCard/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end mb-4">
                        <NewsCard/>
                    </div>
                </div>
            </div>
        </>
    )
}
