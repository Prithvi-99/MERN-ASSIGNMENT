const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$129",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$79",
    image: "https://via.placeholder.com/300",
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-blue-500 font-bold">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
