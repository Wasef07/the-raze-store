import React from 'react'
import ProfileFillCard from './ProfileFillCard'

const UserDetail = () => {
  return (
    <div className='space-y-5'>
      <ProfileFillCard keys={"Name"} value={"Pablo Pandy"}/>
      <ProfileFillCard keys={"Email"} value={"pablo.pandy@in"}/>
      <ProfileFillCard keys={"Mobile"} value={"123456789"}/>
    </div>
  )
}

export default UserDetail
