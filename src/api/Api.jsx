import React from 'react'
import UserPosts from './endpoints/UserPosts'
import TokenPost from './endpoints/TokenPost'
import PhotoPost from './endpoints/PhotoPost'
import PhotoGet from './endpoints/PhotoGet'

const Api = () => {
  return (
    <div>
          <h2>User Post</h2>
          <UserPosts />
          <h2>Token Post</h2>
          <TokenPost />
          <h2>Photo Post</h2>
          <PhotoPost />
          <h2>Photo Get</h2>
          <PhotoGet />
    </div>
  )
}

export default Api
