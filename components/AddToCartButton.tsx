'use client';

import { useCart } from './CartProvider';

type AddToCartButtonProps = {
  id: string;
  name: string;
  brand: string;
  store: string;
  price: number;
  currency: string;
  image: string;
  size: string;
};

export function AddToCartButton(props: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      className="primary-btn"
      onClick={() => addItem(props)}
    >
      Add to bag
    </button>
  );
}
