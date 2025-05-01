const PriceFormatter = ({ price }) => {
    return <span>₦{price.toLocaleString()}</span>;
  };
export default PriceFormatter;  