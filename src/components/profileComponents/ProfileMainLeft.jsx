import React from 'react'
import { ProfileData } from './profileMainLeftComponents/ProfileData'
import { SweetMemories } from './profileMainLeftComponents/SweetMemories'
import { PagesLikeCard } from '../peopleBarComponents/PagesLikeCard'
import { Pages } from './profileMainLeftComponents/Pages'


export const ProfileMainLeft = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                    <ProfileData/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                    <SweetMemories/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                    <Pages/>
                </div>
            </div>
        </div>
    </>
  )
}
