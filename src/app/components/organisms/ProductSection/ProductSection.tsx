"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Element } from "react-scroll";
import Button from "../../atoms/Button/Button";
import Modal from "../../molecules/Modal/Modal";
import { imgDefault } from "./ProductSection.constant";
import "./ProductSection.css";
import { ProductType } from "./ProductSection.types";

const ProductSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const products = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/product.json`,
        );
        const resProducts = await products.data?.data;

        const productsImg = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/image.json`,
        );
        const resProductsImg = await productsImg.data?.data;

        const imagesMap: { [key: string]: string } = {};

        resProductsImg.forEach((item: { id: number[]; image: string }) => {
          item.id.forEach((id) => {
            imagesMap[id] = item.image;
          });
        });

        const combinedDataProducts = resProducts?.map((item: ProductType) => ({
          ...item,
          image: imagesMap[item.id] || null,
        }));

        setProducts(combinedDataProducts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataProduct();
  }, []);

  const handleOnClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const ProductList = showAll ? products : products.slice(0, 6);

  return (
    <Element name="Products">
      <div className="flex h-full min-h-screen flex-col items-center justify-start bg-[#ffdee6] bg-[url('/img/grid-cylinder.svg')] bg-cover bg-fixed bg-bottom bg-no-repeat p-16 mobile:px-2 mobile:py-8">
        <Slide direction="up" triggerOnce={true}>
          <div className="mb-12 p-4 text-5xl font-bold uppercase text-black mobile:text-4xl">
            Our Product
          </div>
        </Slide>
        {isLoading ? (
          <div className="loader" />
        ) : (
          <Slide direction="up" triggerOnce={true}>
            <div className="z-10 mb-8 grid grid-cols-6 justify-center gap-8 tablet:grid-cols-3 mobile:grid-cols-2">
              {ProductList?.map((item: ProductType) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowModal(true);
                    setSelectedProduct(item);
                  }}
                  className="h-52 w-40 border-2 border-black bg-white  shadow-[7px_10px_0px_0px_#000000] hover:scale-105 hover:cursor-pointer hover:transition-all hover:duration-200"
                >
                  <img
                    src={item.image || imgDefault}
                    alt={`${item.name}-img`}
                    className="h-[60%] w-40 object-cover"
                  />
                  <div className="p-2">
                    <div className="text-xl font-bold text-gray-400">
                      {item.id} halo
                    </div>
                    <div className="overflow-hidden text-ellipsis text-nowrap text-lg font-bold uppercase">
                      {item.name || `Product ${item.id}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Slide>
        )}

        {!showAll && !isLoading && (
          <Slide direction="up" triggerOnce={true}>
            <Button text="Show all" onClick={() => setShowAll(true)} />
          </Slide>
        )}
      </div>
      <Modal
        showModal={showModal}
        selectedProduct={selectedProduct}
        onClose={handleOnClose}
      />
    </Element>
  );
};

export default ProductSection;
