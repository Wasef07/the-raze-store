import React from 'react'
import HomeCategoryTable from './HomeCatgoryTable'
import { useAppSelector } from '../../Redux ToolKit/Store';


const ShopByCategory = () => {
  const homeCategories = useAppSelector((store)=>store.homeCategory.homeCategories);
  return (
    <HomeCategoryTable categories={homeCategories?.shopByCategories}/>
  )
}

export default ShopByCategory
