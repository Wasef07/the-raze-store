import React, { useEffect } from 'react'
import Navbar from '../../common/Navbar'
import AdminDrawerList from '../Slidebar/AdminDrawerList'
import AdminRoutes from '../../Routes/AdminRoutes'
import { useAppDispatch } from '../../Redux ToolKit/Store'
import { fetchHomeCategory } from '../../Redux ToolKit/Features/Admin/AdminSlice'

const Dashboard = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchHomeCategory({}))
  },[])
  return (
    <div className='min-h-screen'>
      <Navbar DrawerList={AdminDrawerList} panelName="Admin Panel"/>
      <section className='lg:flex lg:h-[90vh]'>
        <div className='hidden lg:block h-full'>
            <AdminDrawerList/>
        </div>
        <div className='p-10 w-full lg:w-[80%] overflow-auto'>
            <AdminRoutes/>
        </div>
      </section>

    </div>
  )
}

export default Dashboard
