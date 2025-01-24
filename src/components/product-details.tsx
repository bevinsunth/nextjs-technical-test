"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Carousel className="w-[800px] mr-16">
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.url}>
              <Image src={image.url} alt={image.alt} width={500} height={500} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div>
        <h1 className="text-2xl font-semibold text-[#282828]">
          {product.title}
        </h1>
        <div className="flex items-center mt-2 mb-4">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-[#282828]">
            {product.rating.value} ({product.rating.count})
          </span>
        </div>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-4xl font-bold tracking-tighter text-[#f04a1c] mt-4">
          ${product.price}
        </p>

        {/* Add the Selects here */}

        <Button className="mt-4 font-semibold" size="lg">
          Add to cart
        </Button>
      </div>
    </div>
  );
};
