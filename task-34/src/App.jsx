import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  return (
    <div className="w-full sm:w-[94%] mx-auto px-4 py-16">
      <h2 className="text-gray-900 text-4xl font-semibold mb-12">
        Our Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <div
              className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100"
              key={product.id}
            >
              <img
                className="h-48 w-full object-cover"
                src={product.images[0]}
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-600">
                    {product.rating} rating
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
