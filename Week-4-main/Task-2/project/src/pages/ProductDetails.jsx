import { useParams, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: '$99', image: 'https://via.placeholder.com/600', description: 'This is a detailed description of Product 1.' },
  { id: 2, name: 'Product 2', price: '$129', image: 'https://via.placeholder.com/600', description: 'This is a detailed description of Product 2.' },
  { id: 3, name: 'Product 3', price: '$79', image: 'https://via.placeholder.com/600', description: 'This is a detailed description of Product 3.' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-20">Product not found!</p>;

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-blue-500 font-semibold mb-6">{product.price}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>
          <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Back to Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
