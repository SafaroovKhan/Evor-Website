import React, { useState } from "react";

const PriceSlider = () => {
  const [price, setPrice] = useState(50);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={price}
        onChange={handlePriceChange}
        className="priceslider"
      />
      <p>Qiymət: {price}₼</p>
    </div>
  );
};

export default PriceSlider;
