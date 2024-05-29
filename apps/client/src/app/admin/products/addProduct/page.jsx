"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import DataContext, {
  useGlobalState,
} from "@app/client/components/admincomponent/globalcontext/DataContext";
import EditcardModified from "@app/client/components/admincomponent/editcardmodified/editcardmod";
import { createProduct } from "@app/client/data/product.data";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    prize: "",
    quantity: "",
    image: "",
    preview: "",
  });

  const router = useRouter();
  // const { productdata, updateproductData } = useContext(DataContext);
  const productdata = useGlobalState((state) => state.products);
  const updateproductData = useGlobalState((state) => state.setProducts);

  const handleSubmit = async (event) => {
      event.preventDefault();

      const newProductData = {
        name: formData.name,
        price: parseFloat(formData.prize),
        description: formData.description,
        quantity: formData.quantity,
      };

      await createProduct(newProductData);
      router.back();
   
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
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
            <input type="file" name="image" onChange={handleImageChange} />
          </div>
          <button type="submit">Add Product</button>
        </form>
        <EditcardModified
          name={formData.name}
          price={formData.prize}
          image={formData.preview}
          description={formData.description}
        />
      </div>
    </div>
  );
}