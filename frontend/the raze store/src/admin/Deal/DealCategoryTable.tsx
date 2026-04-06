import React from 'react'
import HomeCategoryTable from '../Homepage/HomeCatgoryTable'
import { useAppSelector } from '../../Redux ToolKit/Store'

const image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSge6gmEXUKfGwsCew8Rjm4-a1i9urseN8RLg&s"
const DealCategoryTable = () => {
  const homeCategories = useAppSelector((store)=>store.homeCategory.homeCategories)
  return (
    <div>
      <HomeCategoryTable categories={homeCategories.deals}/>
    </div>
  )
}

export default DealCategoryTable
