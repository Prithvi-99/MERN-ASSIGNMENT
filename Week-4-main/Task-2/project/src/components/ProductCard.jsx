import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-blue-500 font-bold mb-4">{product.price}</p>
      <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
