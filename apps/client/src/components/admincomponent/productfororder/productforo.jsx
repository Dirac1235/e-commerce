import "./styles.css";
// import { productData } from "@app/client/data/product.data";
import img from "../../../../public/phone.jpg";
import { useEffect, useState } from "react";
import { getManyProducts } from "@app/client/data/product.data";

export default function ProductForOrder(props) {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    const productFunction = async () => {
      const product= await getManyProducts();
      setProductData(product)
    };
    productFunction()
  },[]);

  const product = productData?.map((pro) => {
    if (props.product_id == pro.id) {
      return (
        <div className="product_for_order">
          <img src={img} alt="" />
          <h3>Name: {pro.name}</h3>
          <h3>Price: {pro.price}</h3>
          <h3>Catagory: {pro.category.name}</h3>
        </div>
      );
    }
  });

  return <div>{product}</div>;
}
