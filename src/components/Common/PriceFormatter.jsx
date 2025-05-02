const PriceFormatter = ({ price, currency = '₦' }) => {
  const formattedPrice = typeof price === 'number' ? price.toLocaleString() : '0';
  return <span>{currency}{formattedPrice}</span>;
};

export default PriceFormatter;
