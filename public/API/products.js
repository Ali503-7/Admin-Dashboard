export const products = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    return json
  } catch (error) {
    return error
  }
};
