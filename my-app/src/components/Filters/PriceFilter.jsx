import React, { useState } from 'react'

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(100)
  const [maxPrice, setMaxPrice] = useState(800)

  const handleMinChange = (e) => {
    const value = Number(e.target.value)
    if (value < maxPrice) {
      setMinPrice(value)
    }
  }

  const handleMaxChange = (e) => {
    const value = Number(e.target.value)
    if (value > minPrice) {
      setMaxPrice(value)
    }
  }

  return (
    <div>
      <p className='text-[16px] text-black mt-5'>Price</p>

      {/* Slider */}
      <div className="relative w-full mt-4">
        
        {/* Track */}
        <div className="h-1 bg-gray-300 rounded"></div>

        {/* Range highlight */}
        <div
          className="absolute h-1 bg-black rounded"
          style={{
            left: `${(minPrice / 1000) * 100}%`,
            right: `${100 - (maxPrice / 1000) * 100}%`
          }}
        ></div>

        {/* Min slider */}
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full top-0 appearance-none bg-transparent pointer-events-none"
        />

        {/* Max slider */}
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full top-0 appearance-none bg-transparent pointer-events-none"
        />

      </div>

      {/* Values */}
      <div className="flex justify-between text-sm text-gray-600 mt-3">
        <span>Rs. {minPrice}</span>
        <span>Rs. {maxPrice}</span>
      </div>
    </div>
  )
}

export default PriceFilter