const HomeCategoryCard = ({item}:any) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      
      <div
        className="
          w-[130px] h-[130px] 
          lg:w-[180px] lg:h-[180px]
          rounded-full overflow-hidden bg-gray-100
          transition-shadow duration-300
          group-hover:shadow-md
        "
      >
        <img
          className="
            w-full h-full object-cover object-top
            transition-transform duration-300
            group-hover:scale-105
          "
          src={item.image}
          alt="Lamps and Lighting"
        />
      </div>

      <h1 className="text-sm font-medium text-center text-gray-800">
        {item.name}
      </h1>
    </div>
  )
}

export default HomeCategoryCard
