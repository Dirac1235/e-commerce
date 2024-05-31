"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import EditCatagoryModified from "@app/client/components/admincomponent/editcatmod/editcatagorymodifies";
import { useGlobalState } from "@app/client/data/globalState";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const router = useRouter();
  // const { categoryData, updateCatagoryData } = useContext(DataContext);
  const categoryData = useGlobalState((state) => state.categories);
  const updateCatagoryData = useGlobalState((state) => state.setCategories);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProductData = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
    };

    const updatedProductData = [...categoryData, newProductData];
    updateCatagoryData(updatedProductData);
    router.back();
  };

  return (
    <div>
      <h2 className="name_header">Add Products</h2>
      <div className="from_product">
        <form className="form" onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="name">Name of Product :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="description">Description :</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="image">Product Image :</label>
            <input
              type="text"
              name="image"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
        <EditCatagoryModified
          name={formData.name}
          image={formData.image}
          description={formData.description}
        />
      </div>
    </div>
  );
}
