import React from 'react'
import HomeCategoryTable from './HomeCatgoryTable'
import { useAppSelector } from '../../Redux ToolKit/Store';


const ElectronicsTable = () => {
  const homeCategories = useAppSelector((store)=>store.homeCategory.homeCategories);
  return (
    <HomeCategoryTable categories={homeCategories?.electricCategories}/>
  )
}

export default ElectronicsTable
