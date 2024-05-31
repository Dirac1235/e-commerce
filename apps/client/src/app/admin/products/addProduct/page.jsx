"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

import EditcardModified from "@app/client/components/admincomponent/editcardmodified/editcardmod";
import { createProduct } from "@app/client/data/product.data";
import { useGlobalState } from "@app/client/data/globalState";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    prize: "",
    quantity: "",
    image: "",
  });

  const router = useRouter();
  const productdata = useGlobalState((state) => state.products);
  const updateproductData = useGlobalState((state) => state.setProducts);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProductData = {
      name: formData.name,
      price: parseFloat(formData.prize),
      description: formData.description,
      quantity: formData.quantity,
      image: formData.image,
    };

    await createProduct(newProductData);
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
            <label htmlFor="prize">Product prize:</label>
            <input
              type="text"
              name="prize"
              value={formData.prize}
              onChange={(e) =>
                setFormData({ ...formData, prize: e.target.value })
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
            <label htmlFor="quantity">Product Quantity :</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
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
        <EditcardModified
          name={formData.name}
          price={formData.prize}
          image={formData.image}
          description={formData.description}
        />
      </div>
    </div>
  );
}
