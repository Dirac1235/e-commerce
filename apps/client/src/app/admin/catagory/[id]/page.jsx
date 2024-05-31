"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { productData } from "@app/client/data/product.data";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import DataContext, {
  useGlobalState,
} from "@app/client/components/admincomponent/globalcontext/DataContext";
import EditCatagoryModified from "@app/client/components/admincomponent/editcatmod/editcatagorymodifies";

export default function EditProduct() {
  const { id } = useParams();

  const [formData, setFormData] = useState({});
  const productdata = useGlobalState((state) => state.categories);
  const updateproductData = useGlobalState((state) => state.setProducts);
  useEffect(() => {
    if (id) {
      const foundproduct = productdata.find((o) => o.id.toString() === id);
      setFormData({
        name: foundproduct?.name,
        description: foundproduct.description,
        image: foundproduct.image,
      });
    }
  }, [id]);

  const router = useRouter();
  // const { productdata, updateproductData } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductData = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
    };

    const updatedProductData = [...productdata, newProductData];
    updateproductData(updatedProductData);
    router.back();
  };

  return (
    <div className="home">
      <h2 className="name_header">Edit Catagory</h2>
      <div className="from_product">
        <form className="form" onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="name">Name of Catagory :</label>
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
            <label htmlFor="image">Catagory Image :</label>
            <input
              type="file"
              name="image"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </div>
          <button type="submit">Edit Catagory</button>
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
