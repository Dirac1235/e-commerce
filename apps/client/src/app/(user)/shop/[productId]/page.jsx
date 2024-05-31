import StarRating from "@app/client/components/userComponents/starRating";
import { getOneProduct } from "@app/client/data/product.data";
import Image from "next/image";

async function ProductDetail(props) {
  const params = props.params;
  const product = await getOneProduct(params.productId);

  return (
    <div className="font-sans">
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <Image
              src={`/${product?.image}`}
              width={500}
              height={500}
              alt="product"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {product?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">
                ${product?.price}
              </p>
            </div>

            <div className="flex space-x-2 mt-4">
              <StarRating />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  SM
                </button>
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  MD
                </button>
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  LG
                </button>
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  XL
                </button>
              </div>
              <button
                type="button"
                className="w-full mt-4 px-4 py-3 bg-pink-950 hover:bg-slate-900 text-white font-semibold rounded"
              >
                Add to cart
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">
                About the item
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>{product.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
