import React from 'react'
import HomeCategoryTable from './HomeCatgoryTable'
import { useAppSelector } from '../../Redux ToolKit/Store';


const GridTable = () => {
  const homeCategories = useAppSelector((store)=>store.homeCategory.homeCategories);
  return (
   <HomeCategoryTable categories={homeCategories?.grid}/>
  )
}

export default GridTable
