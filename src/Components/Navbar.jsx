"use client"
import React from 'react'
import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'


function Navbar() {
    const pathname = usePathname()
    const NavItems = () => (
        <>
          <Link href="/" className={`text-gray-700 before:content-[''] ${pathname === '/' ? "before:w-[10px]" : "before:w-[0px]"} before:hover:w-[45px] before:duration-300  before:top-10 before:h-[2px] before:bg-purple-600 md:before:absolute hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium`}>HOME</Link>

          <Link href="/shop" className={`text-gray-700 before:content-[''] ${pathname === '/shop' ? "before:w-[10px]" : "before:w-[0px]"}  before:w-[0px] before:hover:w-[45px] before:duration-300 before:top-10  before:h-[2px] before:bg-purple-600  md:before:absolute  hover:text-purple-600 px-3 py-2  rounded-md text-sm font-medium`}>SHOP</Link>
        
          <Link href="/about" className={`text-gray-700 before:content-[''] ${pathname === '/about' ? "before:w-[10px]" : "before:w-[0px]"}  before:w-[0px] before:hover:w-[47px] before:duration-300 before:top-10  before:h-[2px] before:bg-purple-600  md:before:absolute hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium`}>ABOUT</Link>
          <Link href="/contact" className={`text-gray-700 before:content-[''] ${pathname === '/contact' ? "before:w-[10px]" : "before:w-[0px]"}  before:w-[0px] before:hover:w-[65px] before:duration-300 before:top-10  before:h-[2px] before:bg-purple-600  md:before:absolute hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium`}>CONTACT</Link>
        
        </>
      )
  return (
    <div>
      <nav className=" w-full bg-transparent  z-10 shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-purple-600">ShoeStore</span>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <NavItems />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/login" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  LOGIN/SIGNUP
                </Link>
                <Link href="/cart" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  <ShoppingCart className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4">
                    <NavItems />
                    <Link href="/login" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">LOGIN/SIGNUP</Link>
                    <Link href="/cart" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      <ShoppingCart className="h-6 w-6 mr-2" /> CART
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
