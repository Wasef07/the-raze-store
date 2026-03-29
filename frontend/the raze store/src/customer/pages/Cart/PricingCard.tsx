import { Divider } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../Redux ToolKit/Store'
import { sumCartItemMRPPrice, sumCartItemSellingPrice } from '../../../util/SumCartItemPrice'

const PricingCard = () => {
  const cart = useAppSelector((store)=>store.cart)
  return (
    <div className="bg-white">
      
      <div className="space-y-3 p-5 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>₹{sumCartItemMRPPrice(cart.cart?.cartItems)}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>- ₹{sumCartItemMRPPrice(cart.cart?.cartItems)-sumCartItemSellingPrice(cart.cart?.cartItems)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>₹79</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Platform Fee</span>
          <span className="text-green-600">FREE</span>
        </div>
      </div>

      <Divider />

      <div className="px-5 py-3 flex justify-between font-semibold text-base">
        <span>Total</span>
        <span>₹{sumCartItemSellingPrice(cart.cart?.cartItems)+79}</span>
      </div>
    </div>
  )
}

export default PricingCard
