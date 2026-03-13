import React from 'react'
import ProfileFillCard from './ProfileFillCard'
import { useAppSelector } from '../../../Redux ToolKit/Store'

const UserDetail = () => {
  const user=useAppSelector(store=>store.user)
  return (
    <div className='space-y-5'>
      <ProfileFillCard keys={"Name"} value={user.user?.name}/>
      <ProfileFillCard keys={"Email"} value={user.user?.email}/>
      <ProfileFillCard keys={"Mobile"} value={user.user?.mobile || "Not Provided"}/>
    </div>
  )
}

export default UserDetail
