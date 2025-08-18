'use client';

import { useState } from 'react';
import { products } from '../product-data';
import Link from 'next/link';

export default function CartPage() {

  const [cartIds] = useState(['123', '345']); 

  const cartProducts = cartIds.map(id => products.find(p => p.id === id));

  return (
    <>
      <h1>Shopping Cart</h1>
      {cartProducts.map(products => (
        <div key={products.id} className="cart-item">
          <h2>{products.name}</h2>
          <p>Price: ${products.price}</p>
          <Link href={`/products/${products.id}`}>View Product</Link>
        </div>
      ))}
    </>
  );
}