"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import CatagoryCard from "@app/client/components/admincomponent/catagorycard/catagoryCard";

import {  useEffect, useState } from "react";
import { getManyCategories } from "@app/client/data/catagory.data";

export default function Catagory() {
  const [categoryData, setCategoryData] = useState([])
  useEffect(() => {
    const categoryHandler = async () => {
      const categories  = await getManyCategories()
      setCategoryData(categories)
    }
    categoryHandler()
  })
 
  const products = categoryData?.map((catagory) => {
    return (
      <CatagoryCard
        id={catagory.id}
        name={catagory.name}
      />
    );
  });

  return (
    <div className="home">
      <h2 className="name_header">Edit Catagory</h2>
      <div className={styles.products}>
        <div className={styles.add_products}>
          <Link href="/admin/catagory/addCatagory">
            <div className={styles.add}>+</div>
          </Link>
        </div>
        {products}
      </div>
    </div>
  );
}
