import React, { useMemo } from 'react'
import SvgStarIcon from '../common/SvgStarIcon';
import { SvgEmptyStar } from '../common/SvgEmptyStart';

const Rating = ({ rating }) => {

  const ratingNumber = useMemo(() => {
    const safeRating = Number(rating) || 0;
    return Array.from({ length: Math.floor(safeRating) });
  }, [rating]);

  return (
    <div className='flex items-center gap-1'>
      {ratingNumber.map((_, index) => (
        <SvgStarIcon key={index} className="w-4 h-4 text-yellow-400" />
      ))}
      {
        new Array(5-ratingNumber?.length).fill().map((_,index)=>(
          <SvgEmptyStar key={'empty-'+index}/>
        ))
      }
      <p className='px-2 text-gray-600'>{rating}</p>  
    </div>
  )
};

export default Rating;