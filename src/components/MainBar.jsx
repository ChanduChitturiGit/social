import React from 'react'
import { PostBar } from './mainBarComponents/PostBar'
import { PostCard } from './mainBarComponents/PostCard'
import { NotifyBar } from './NotifyBar'

export const MainBar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <PostBar />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12">
            <PostCard />
          </div>
        </div>
      </div>
    </>
  )
}
