import React from 'react'
import { PeopleBar } from './PeopleBar';
import { Settings } from './Settings';
import { MainBar } from './MainBar';
import { NotifyBar } from './NotifyBar';

const Home = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 px-4  d-flex justify-content-end ">
                    <PeopleBar/>
                </div>
                <div className="col-6">
                    <MainBar/>
                </div>
                <div className="col-3 px-4 d-flex justify-content-end">
                    <NotifyBar/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;