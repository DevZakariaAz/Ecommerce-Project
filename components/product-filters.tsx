"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, X } from "lucide-react"

interface ProductFiltersProps {
  onSortChange: (sort: string) => void
  onPriceRangeChange: (range: [number, number]) => void
  onCategoryChange: (categories: string[]) => void
}

export default function ProductFilters({ onSortChange, onPriceRangeChange, onCategoryChange }: ProductFiltersProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 50])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = ["Apparel", "Accessories", "Home & Kitchen"]

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updated = checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category)
    setSelectedCategories(updated)
    onCategoryChange(updated)
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    onPriceRangeChange([value[0], value[1]])
  }

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle & Sort */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>

        <Select onValueChange={onSortChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Filters Panel */}
      <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
        <Card className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Filters</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)} className="lg:hidden">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-medium">Categories</h4>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                />
                <Label htmlFor={category} className="text-sm">
                  {category}
                </Label>
              </div>
            ))}
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <h4 className="font-medium">Price Range</h4>
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={handlePriceChange}
                max={50}
                min={0}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
