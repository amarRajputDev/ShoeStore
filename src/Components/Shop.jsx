"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import shoe from "../asset/sports-shoe4.jpg"

import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from './Navbar'
import Image from 'next/image'

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["Sneakers", "Boots", "Sandals", "Dress Shoes", "Athletic"]
  const products = [
    { id: 1, name: "Classic Sneaker", price: 89.99, category: "Sneakers", image: "../asset/sports-shoe4.jpg" },
    { id: 2, name: "Hiking Boot", price: 129.99, category: "Boots", image: "/placeholder.svg" },
    { id: 3, name: "Summer Sandal", price: 59.99, category: "Sandals", image: "/placeholder.svg" },
    { id: 4, name: "Formal Oxford", price: 149.99, category: "Dress Shoes", image: "/placeholder.svg" },
    { id: 5, name: "Running Shoe", price: 109.99, category: "Athletic", image: "/placeholder.svg" },
    { id: 6, name: "Casual Loafer", price: 79.99, category: "Dress Shoes", image: "/placeholder.svg" },
    { id: 7, name: "Winter Boot", price: 139.99, category: "Boots", image: "/placeholder.svg" },
    { id: 8, name: "Sport Sandal", price: 69.99, category: "Sandals", image: "/placeholder.svg" },
    // Add more products as needed
  ]

  const filteredProducts = products.filter(product => 
    (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-high") return a.price - b.price
    if (sortBy === "price-high-low") return b.price - a.price
    return 0 // "featured" or default
  })



  return (
    <div className="min-h-screen bg-gray-50">
     <Navbar/>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shop Our Collection</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-1/4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          setSelectedCategories(
                            checked
                              ? [...selectedCategories, category]
                              : selectedCategories.filter((c) => c !== category)
                          )
                        }}
                      />
                      <label
                        htmlFor={category}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price-range">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                  <Slider
                    min={0}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">{sortedProducts.length} products</p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className=' h-[60%] overflow-hidden '>
                  <Image src={shoe} alt={product.name}  className="w-full hover:scale-110 duration-500 h-full  object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600">{product.category}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
                      <Button variant="outline">Add to Cart</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">ShoeStore</h3>
              <p className="text-gray-400">Step into your style with our curated collection of trendy footwear.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">123 Shoe Street, Footwear City, FC 12345</p>
              <p className="text-gray-400">Email: info@shoestore.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}