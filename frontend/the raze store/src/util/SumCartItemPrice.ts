export const sumCartItemMRPPrice = (items = []) => {
  return items.reduce(
    (total, item) => total + (item?.mrpPrice || 0),
    0
  );
};

export const sumCartItemSellingPrice = (items = []) => {
  return items.reduce(
    (total, item) => total + (item?.sellingPrice || 0),
    0
  );
};