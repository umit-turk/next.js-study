"use client"
import Image from "next/image";
import React from "react";
import {Rating} from '@mui/material';
import textClip from "@/utils/TextClip";
import { useRouter } from "next/navigation";
const ProductCard = ({product}:{product:any}) => {

  const router = useRouter()

    let productRating = product?.reviews?.reduce((acc: number,item:any) => acc + item.rating,0) / product?.reviews.length


  return (
    <div onClick={() => router.push(`product/${product.id}`)} className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md">
        <div className="relative h-[150px]">
            <Image fill src={product.image} objectFit="contain" className="" alt="" />
        </div>
        <div className="text-center mt-2 space-y-1">
            <div>{textClip(product.name)}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-orange-600 font-bold text-lg md:text-md">{product.price} ₺</div>
        </div>
    </div>
  )
};

export default ProductCard;
