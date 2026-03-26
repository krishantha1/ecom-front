import React, { useMemo } from "react";
import Navigation from "../../components/Navigation/Navigation";
import FilterIcon from "../../components/common/FilterIcon";
import Categories from "../../components/Filters/Category";
import content from "../../data/content.json";
import PriceFilter from "../../components/Filters/PriceFilter";
import ColorsFilter from "../../components/Filters/ColorsFilter";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductCard from "./ProductCard";

const categories = content?.categories;

const ProductListPage = ({ categoryType }) => {
  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);

   const productListItems = useMemo(()=>{
     return content?.products?.filter(
        (product)=> product?.category_id === categoryContent?.id
     );
   },[categoryContent]);
  console.log(categoryContent); 

  return (
    <div>
      <div className="flex">
        <div className="w-[20%] p-[20px] border rounded-lg m-[20px]">
          {/* Filters */}
          <div className="flex justify-between">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>

          <div>
            <p className="text-[16px] mt-5 text-black">Categories</p>
            {/* Fixed: capital C for component */}
            <Categories types={categoryContent?.types} />
            <hr></hr>
          </div>

          <div>
            {/* price */}
            <PriceFilter />
            <hr></hr>
          </div>
          <div>
            {/* color */}
            <ColorsFilter colors={categoryContent?.meta_data?.colors} />
            <hr></hr>
          </div>
          <div>
            {/* size */}
            <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
            <hr></hr>
          </div>
        </div>

        <div className="p-[15px]">
          <p className="text-black text-lg">{categoryContent?.description}</p>
          {/* Products */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2">
           {productListItems?.map((item,index)=>(
            <ProductCard key={index} {...item}/>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
