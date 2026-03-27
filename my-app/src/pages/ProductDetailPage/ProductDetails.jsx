import React, { useEffect, useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import content from "../../data/content.json";
import Rating from "../../components/Rating/Rating";

import SizeFilter from "../../components/Filters/SizeFilter";
import ProductColors from "./ProductColors";
import CartIcon from "../../components/common/Carticon";
import CreditCardIcon from "../../components/common/CreditCardIcon";

const categories = content?.categories;


const extraSections =[
  {
     icon:<CreditCardIcon/>,
     label:'Secure Payment'
  }
]

const ProductDetails = () => {
  const { product } = useLoaderData();
  const [image, setImage] = useState(
    product?.images[0]?.startsWith("http")
      ? product?.images[0]
      : product?.thumbnail
  );
  const [breadCrumbLinks, setBreadCrumbLinks] = useState([]);

  const productCategory = useMemo(() => {
    return categories?.find(
      (category) => category?.id === product?.category_id
    );
  }, [product]);

  useEffect(() => {
    setBreadCrumbLinks([]);
    const arrayLinks = [
      { title: "Shop", path: "/" },
      {
        title: productCategory?.name,
        path: productCategory.path,
      },
    ];
    const productType = productCategory?.types?.find(
      (item) => item?.type_id === product?.type_id
    );
    if (productType) {
      arrayLinks?.push({
        title: productType?.name,
        path: productCategory.name,
      });
    }
    setBreadCrumbLinks(arrayLinks);
  }, [productCategory, product]);

  return (
    <div className="flex flex-col  md:flex-row px-10 ">
      <div className="w-[100%] lg:w-[50%] md:w-[40%]">
        {/* Image*/}
        <div className="flex flex-col md:flex-row">
          <div className="w-[100%] md:w-[30%] justify-center h-[40px] md:h-[420px]">
            {/*Stack Images */}
            <div className="flex flex-row md:flex-col justify-center h-full">
              {product?.images[0]?.startsWith("http") &&
                product?.images?.map((item, index) => (
                  <button
                    className=" rounded-lg w-fit p-2 mb-2"
                    onClick={() => setImage(item)}
                  >
                    <img
                      src={item}
                      className="h-[60px] w-[60px] object-cover hover:scale-105"
                      alt={"sample-" + index}
                    />
                  </button>
                ))}
            </div>
          </div>
          <div className="w-full md:w-[80%] flex justify-center md:pt-0 pt-10">
            <img
              src={image}
              className="h-full w-full max-h-[520px] max-w-[520px]
              border rounded-lg cursor-pointer object-cover "
              alt={product?.title}
            />
          </div>
        </div>
      </div>

      <div className="w-[60%] px-10">
        <Breadcrumb links={breadCrumbLinks} />
        <p className="text-3xl pt-4">{product?.title}</p>
        <Rating rating={product?.rating} />
        

        {/* Price Tag*/}
        <p className='text-xl bold py-2'>${product?.price}</p>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p className="text-sm bold"> Select Size</p>
            <Link className="text-sm text-gray-500 hover:text-gray-900">
              {"Size Guide ->"}
            </Link>
          </div>
        </div>

        <div className="mt-5">
          {" "}
          <SizeFilter sizes={product?.size} hidleTitle />
        </div>

        <div>
          <p className="text-lg bold"> Colors Available</p>
          <ProductColors colors={product?.color} />
        </div>
        <div className="flex pt-4">
          <button className="bg-black rounded-lg px-4 py-2">
            <div className="flex items-center gap-2 text-white">
              <CartIcon bgColor="black" />
              <span>Add to Cart</span>
            </div>
          </button>
        </div>
         
         <div className='flex flex-wrap w-[250px] '>
           {/* */}

           {
            extraSections?.map((section)=>(
               <div className='flex justify-center items-center'>
                {section?.icon}
                <p className='p-2'>{section?.label}</p>

               </div>
            ))
           }
         </div>

      </div>
    </div>
  );
};

export default ProductDetails;
