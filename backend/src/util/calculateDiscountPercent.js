const calculateDiscountPercentage = (mrpPrice, sellingPrice) => {
  if (mrpPrice <= 0) {
    return 0;
    // throw new Error("MRP Price should be greater than Zero");
  }
  const discount = mrpPrice - sellingPrice;
  return Math.round((discount / mrpPrice) * 100);
};

export default calculateDiscountPercentage;