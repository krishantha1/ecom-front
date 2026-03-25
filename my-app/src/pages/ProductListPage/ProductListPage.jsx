import React, { useMemo } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import FilterIcon from '../../components/common/FilterIcon'
import Categories from  '../../components/Filters/Category'
import content from '../../data/content.json'
import PriceFilter from '../../components/Filters/PriceFilter'
import ColorsFilter from '../../components/Filters/ColorsFilter'

const categories = content?.categories

const ProductListPage = ({ categoryType }) => {

  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType)
  }, [categoryType])

  console.log(categoryContent) // for debugging, check if types exist

  return (
    <div>
      <div className='flex'>
        <div className='w-[20%] p-[20px] border rounded-lg m-[20px]'>
          {/* Filters */}
          <div className='flex justify-between'>
            <p className='text-[16px] text-gray-600'>Filter</p>
            <FilterIcon />
          </div>

          <div>
            <p className='text-[16px] mt-5 text-black'>Categories</p>
            {/* Fixed: capital C for component */}
            <Categories types={categoryContent?.types} />
            <hr></hr>
          </div>

          <div>
            {/* price */}
            <PriceFilter/>
            <hr></hr>
          </div>
          <div>
            {/* color */}
            <ColorsFilter colors={categoryContent?.meta_data?.colors}/>
            <hr></hr>
          </div>
          <div>
            {/* size */}
           
            <hr></hr>
          </div>
        </div>

        <div className='p-[15px]'>
          <p className='text-black text-lg'>{categoryContent?.description}</p>
          {/* Products */}
        </div>
      </div>
    </div>
  )
}

export default ProductListPage