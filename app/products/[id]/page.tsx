import { products } from '../../product-data';
import Image from 'next/image';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <div>
    <h1>Product Detail</h1>
      <p>This is the product detail page.</p>
      <p>Product ID: {product.id}</p>
      <p>Product Name: Product {product.name}</p>
      <p>Product Price: ${product.price}</p>
      <p>Product Description: {product.description}</p>
      <Image src={'/' + product.imageUrl} alt={product.name} width={200} height={200} />

    </div>
    
  )
}