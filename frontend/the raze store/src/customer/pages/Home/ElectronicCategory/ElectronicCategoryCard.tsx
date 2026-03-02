import React from 'react'
import { useNavigate } from 'react-router'

const ElectronicCategoryCard = ({ item }:any) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/products/${item.categoryId}`)} className="flex w-20 flex-col items-center gap-1.5 cursor-pointer group">
      
      <img
        className="h-10 object-contain group-hover:scale-105 transition-transform"
        src={item.image}
        alt={item.name}
      />

      <h2 className="text-xs font-medium text-gray-700 text-center leading-tight group-hover:text-black">
        {item.name}
      </h2>
    </div>
  )
}

export default ElectronicCategoryCard
