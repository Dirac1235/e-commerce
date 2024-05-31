import { getManyCategories } from "@app/client/data/catagory.data";
import { getManyProducts } from "../../../data/product.data";
import CategoryList from "@app/client/components/userComponents/categorList";
import ShopList from "@app/client/components/userComponents/shoplist";
const products = await getManyProducts();
const categories = await getManyCategories();
function Shop() {
  return (
    <div className="h-full  grid grid-cols-6 ">
      <div className="w-full m-8 mt-9 col-span-1">
        <div className=" w-fit bg-white mt-10  pb-6 shadow rounded overflow-hidden hidden md:block">
            <h3 className="text-xl w-full p-4 text-white uppercase bg-pink-950 font-medium">
              Filters
            </h3>
          <div className="space-y-2 pb-5">
            <div className="p-3">
              <div>
                <CategoryList categories={categories} />
              </div>

              <div className="pt-4">
                <h3 className="text-mdx` text-gray-800 mb-3 uppercase font-medium">
                  Price
                </h3>
                <div className="mt-4 flex items-center">
                  <input
                    type="text"
                    name="min"
                    id="min"
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="min"
                  />
                  <span className="mx-3 text-gray-500">-</span>
                  <input
                    type="text"
                    name="max"
                    id="max"
                    className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    placeholder="max"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 ">
        <h1 className="mt-6 p-3 ml-28  text-2xl font-semibold">Products</h1>
        <ShopList products={products} />
      </div>
    </div>
  );
}
export default Shop;
