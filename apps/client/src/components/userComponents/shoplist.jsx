"use client"
import { useFilter } from "@app/client/data/filter";
import ProductCard from "./productCard";

function ShopList({ products }) {
  const filterByCategory = useFilter((state) => state.filterByCategory);

  const filteredData = products.filter((item) =>
    !filterByCategory.includes(item.categoryId)
  );
  return (
    <ul className="grid grid-cols-4 ml-24 align-middle gap-7 w-5/6  mb-3">
      {filteredData.map((product) => (
        <li
          key={product.id}
          className=" flex flex-col w-fit ml-2 shadow-sm justify-center rounded-md "
        >
          <ProductCard product={product} width={"w-64"} />
        </li>
      ))}
    </ul>
  );
}
export default ShopList;
