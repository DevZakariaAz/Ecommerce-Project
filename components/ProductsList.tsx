"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/product-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/app/contexts/cart-context"

export default function ProductsList({ products }: { products: Product[] }) {
  const { addItem, isInCart, getItemQuantity } = useCart()

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="relative">
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={'/'+ product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Sale Badge */}
            {product.price < 25 && <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">Sale</Badge>}
          </div>

          <CardContent className="p-4">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
              <span className="text-sm text-muted-foreground ml-1">(4.0)</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">${product.price}</span>
                {product.price < 25 && (
                  <span className="text-sm text-muted-foreground line-through">${product.price + 5}</span>
                )}
              </div>

              <Button
                size="sm"
                className="gap-2"
                onClick={() => handleAddToCart(product)}
                variant={isInCart(product.id) ? "secondary" : "default"}
              >
                <ShoppingCart className="h-4 w-4" />
                {isInCart(product.id) ? `In Cart (${getItemQuantity(product.id)})` : "Add to Cart"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
