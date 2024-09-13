interface Product {
  id: number;
  name: string;
  price: number;
}

const productList: Product[] = Array.from({length: 15}, (_, index) => ({
  id: index,
  name: `Product ${index + 1}`,
  price: parseFloat((Math.random() * 100).toFixed(2)),
}));

export default productList;
