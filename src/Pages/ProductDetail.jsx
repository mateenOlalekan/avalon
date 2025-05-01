import { useParams } from "react-router-dom";
import products from "../components/Data/Product"; // renamed for clarity

const ProductDetail = () => {
  const { id } = useParams();
  const productID = parseInt(id, 10); // corrected base from 1000 to 10

  const product = products.find((p) => p.id === productID);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="bg-white p-4 rounded shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">
        ${product.price}
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
        Add to Cart
      </button>
      <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 ml-2">
        Buy Now
      </button>

      <div className="mt-6 space-y-6">
        <Section title="Product Details" content={product.details} />
        <Section title="Reviews" content="No reviews yet." />
        {product.relatedProducts?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold">Related Products</h3>
            <ul className="list-disc pl-5">
              {product.relatedProducts.map((related) => (
                <li key={related.id}>
                  <a
                    href={`/products/${related.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {related.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Section title="Shipping Information">
          <p>Free shipping on orders over $50.</p>
          <p>Ships within 2-3 business days.</p>
          <p>Returns accepted within 30 days.</p>
        </Section>
        <Section title="Payment Options">
          <p>We accept all major credit cards and PayPal.</p>
          <p>Secure checkout process.</p>
        </Section>
        <Section title="Customer Support">
          <p>24/7 customer support available.</p>
          <p>Help center with live chat and email support.</p>
        </Section>
        <Section title="FAQs">
          <p>Q: How do I track my order?</p>
          <p>A: You'll receive a tracking number via email.</p>
          <p>Q: Can I cancel my order?</p>
          <p>A: Contact support as soon as possible.</p>
        </Section>
        <Section title="Warranty">
          <p>1-year warranty included.</p>
          <p>Contact support for warranty claims.</p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, content, children }) => (
  <div className="mt-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    {content ? <p>{content}</p> : children}
  </div>
);

export default ProductDetail;
