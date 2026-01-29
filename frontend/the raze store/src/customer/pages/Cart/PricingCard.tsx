import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <div className="bg-white">
      
      <div className="space-y-3 p-5 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>₹2,299</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>- ₹299</span>
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
        <span>₹2,079</span>
      </div>
    </div>
  )
}

export default PricingCard
