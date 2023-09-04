import React from 'react'
import { RecentNotifications } from './notifyComponent/RecentNotifications'
import { Advertise } from './notifyComponent/Advertise'
import { FriendsZone } from './notifyComponent/FriendsZone'

export const NotifyBar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12">
            <RecentNotifications/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <Advertise/>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <FriendsZone/>
          </div>
        </div>
      </div>
    </>
  )
}
