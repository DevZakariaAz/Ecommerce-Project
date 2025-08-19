"use client"

import { useState } from "react"
import { products } from "@/lib/product-data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/app/contexts/cart-context"
import EcommerceHeader from "@/components/ecommerce-header"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  
  const product = products.find((p) => p.id === params.id)
  
  const { addItem, isInCart, getItemQuantity } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <EcommerceHeader />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const rating = 4.5
  const reviewCount = 127
  const inStock = true
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3)

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <EcommerceHeader />
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-900">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border overflow-hidden">
              <Image
                src={'/'+ product.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded border overflow-hidden cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <Image
                    src={'/'+ product.imageUrl}
                    alt={`${product.name} view ${i}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({reviewCount} reviews)</span>
                </div>
                <Badge variant={inStock ? "default" : "destructive"}>{inStock ? "In Stock" : "Out of Stock"}</Badge>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <span className="text-lg text-gray-500 line-through">${Math.round(product.price * 1.2)}</span>
                <Badge variant="secondary">Save ${Math.round(product.price * 0.2)}</Badge>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    className="px-3 py-2 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button className="px-3 py-2 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1"
                  disabled={!inStock}
                  onClick={handleAddToCart}
                  variant={isInCart(product.id) ? "secondary" : "default"}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {isInCart(product.id) ? `In Cart (${getItemQuantity(product.id)})` : "Add to Cart"}
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                Buy Now
              </Button>
            </div>

            <Separator />

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="w-5 h-5" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="w-5 h-5" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RotateCcw className="w-5 h-5" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={`/`+ relatedProduct.imageUrl}
                      alt={relatedProduct.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">${relatedProduct.price}</span>
                      <Link href={`/products/${relatedProduct.id}`}>
                        <Button size="sm">View</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
