import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItemCard = () => {
  return (
    <div className="border border-gray-300 rounded-md bg-white relative">
      

      <div className="p-4 flex gap-3">
        

        <img
          className="w-[90px] h-[110px] object-cover rounded-md"
          src="https://lajreedesigner.com/cdn/shop/files/KP-6026_4.jpg?v=1745490955&width=750"
          alt="product"
        />


        <div className="space-y-1 flex-1">
          <h2 className="text-sm font-semibold text-gray-800">
            Lajree Designer
          </h2>

          <p className="text-sm text-gray-700 leading-snug line-clamp-2">
            Extraordinary Yellow Soft Silk Saree With Glowing Blouse Piece
          </p>

          <p className="text-xs text-gray-400">
            <span className="font-medium">Sold by:</span> Lajree Designer
          </p>

          <p className="text-xs text-gray-500">
            7 days replacement available
          </p>
        </div>
      </div>


      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          top: 6,
          right: 6,
        }}
      >
        <Close fontSize="small" />
      </IconButton>

      <Divider />


      <div className="px-4 py-2 flex justify-between items-center">
        

        <div className="flex items-center border border-gray-300 rounded-md">
          <Button size="small" sx={{ minWidth: 30 }}>
            <Remove fontSize="small" />
          </Button>

          <span className="px-3 text-sm font-semibold text-gray-800">
            2
          </span>

          <Button size="small" sx={{ minWidth: 30 }}>
            <Add fontSize="small" />
          </Button>
        </div>


        <p className="text-sm font-semibold text-gray-800">
          ₹1,499
        </p>
      </div>
    </div>
  )
}

export default CartItemCard
