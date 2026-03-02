const DealCard = ({ deal }: any) => {
  return (
    <div className="w-full cursor-pointer">
      <img
        className="w-full h-[8rem] object-cover object-top 
                   border-x-4 border-t-4 border-pink-600"
        src={deal.image}
        alt="deal"
      />

      <div className="border-2 border-black bg-black text-white py-1 text-center">
        <p className="text-lg font-bold leading-tight">
          {deal.discount}% OFF
        </p>
        <p className="text-xs font-semibold">
          Shop Now
        </p>
      </div>
    </div>
  )
}

export default DealCard;
