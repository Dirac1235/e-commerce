"use client";

import "./styles.css";
import Editcard from "@app/client/components/admincomponent/editCard/editcard";
import { useGlobalState } from "@app/client/data/globalState";
import { getManyProducts } from "@app/client/data/product.data";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Product() {
  const [productData , setProductData] = useState()
  useEffect(() => {
    const productFunction = async () => {
      const product= await getManyProducts();
      setProductData(product)
    };
    productFunction()
  },[]);

  const products = productData?.map((product) => {
    return (
      <Editcard
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    );
  });

  return (
    <div className="home">
      <h2 className="name_header">Edit Products</h2>
      <div className="products">
        <div className="add_products">
          <Link href="/admin/products/addProduct">
            <div className="add">+</div>
          </Link>
        </div>
        {products}
      </div>
    </div>
  );
}
