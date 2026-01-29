import React from 'react'
import ElectronicCategoryCard from './ElectronicCategoryCard'

const electronic=[
    {
        section:"ELECTRIC_CATEGORIES",
        name:"Laptop",
        image:"https://www.asus.com/media/Odin/Websites/global/Series/9.png",
        categoryId:"laptops"
    },
    {
        section:"ELECTRIC_CATEGORIES",
        name:"Mobile",
        image:"https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png",
        categoryId:"mobiles"
    },
    {
        section:"ELECTRIC_CATEGORIES",
        name:"Smartwatch",
        image:"https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?semt=ais_hybrid&w=740&q=80",
        categoryId:"smartwatches"
    },
    {
        section:"ELECTRIC_CATEGORIES",
        name:"Headphone",
        image:"https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-wireless-headphone-png-image_15830312.png",
        categoryId:"headphones"
    },
    {
        section:"ELECTRIC_CATEGORIES",
        name:"Speaker",
        image:"https://pngimg.com/d/audio_speakers_PNG11151.png",
        categoryId:"speakers"
    },
    {
        section:"ELECTRIC_CATEGORIES",
        name:"TV",
        image:"https://static.vecteezy.com/system/resources/thumbnails/038/015/883/small/ai-generated-modern-tv-isolated-on-transparent-background-free-png.png",
        categoryId:"televisions"
    },
    {
        section:"ELECTRIC_CATEGORIES",
        name:"Camera",
        image:"https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-black-dslr-camera-with-large-lens-clipart-illustration-stock-photo-png-image_13758787.png",
        categoryId:"cameras"
    },
]

const ElectronicCategory = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4 py-4 px-4 lg:px-20 border-b">
      {electronic.map((item) => (
        <ElectronicCategoryCard key={item.image || item.name} item={item} />
      ))}
    </div>
  )
}

export default ElectronicCategory
