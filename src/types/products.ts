export type Product = {
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  user: string;
  reviews?: null[] | null;
  __v: number;
  createdAt: string;
  updatedAt: string;
};
