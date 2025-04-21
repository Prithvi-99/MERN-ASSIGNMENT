import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: '$99', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', price: '$129', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', price: '$79', image: 'https://via.placeholder.com/300' },
];

const Home = () => {
  return (
    <section className="py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Home;
