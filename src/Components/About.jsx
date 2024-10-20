
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function AboutPage() {
  const teamMembers = [
    { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg" },
    { name: "John Smith", role: "Head of Design", image: "/placeholder.svg" },
    { name: "Emily Brown", role: "Lead Developer", image: "/placeholder.svg" },
    { name: "Michael Johnson", role: "Marketing Director", image: "/placeholder.svg" },
  ]

  const NavItems = () => (
    <>
      <Link href="/" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME</Link>
      <Link href="/shop" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SHOP</Link>
      <Link href="/about" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ABOUT</Link>
      <Link href="/contact" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CONTACT</Link>
    </>
  )

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navbar */}
      <nav className="bg-purple-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-white">ShoeStore</span>
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <NavItems />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/login" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  LOGIN/SIGNUP
                </Link>
                <Link href="/cart" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  <ShoppingCart className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden text-white border-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-purple-700">
                  <nav className="flex flex-col gap-4">
                    <NavItems />
                    <Link href="/login" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LOGIN/SIGNUP</Link>
                    <Link href="/cart" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      <ShoppingCart className="h-6 w-6 mr-2" /> CART
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">About ShoeStore</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2010, ShoeStore has been at the forefront of footwear fashion, providing our customers with the latest trends and timeless classics. Our journey began with a simple idea: to offer high-quality, stylish shoes that don't break the bank.
          </p>
          <p className="text-gray-700 mb-6">
            Over the years, we've grown from a small local shop to a nationwide online retailer, but our commitment to quality, style, and customer satisfaction remains unchanged. We believe that everyone deserves to walk in comfort and confidence, and we're here to make that happen.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At ShoeStore, our mission is to provide our customers with footwear that combines style, comfort, and affordability. We strive to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Offer a diverse range of shoes for all occasions and lifestyles</li>
            <li>Ensure the highest quality standards in all our products</li>
            <li>Provide exceptional customer service and shopping experience</li>
            <li>Stay ahead of fashion trends while maintaining timeless classics</li>
            <li>Contribute to our community through sustainable practices and charitable initiatives</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-purple-700">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-700 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
          <p className="mb-6">
            We're always looking for passionate individuals to join our team. If you love shoes and want to be part of a dynamic, growing company, we'd love to hear from you!
          </p>
          <Button variant="outline" className="bg-white text-purple-700 hover:bg-purple-100">
            View Career Opportunities
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-10 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">ShoeStore</h3>
              <p className="text-purple-200">Step into your style with our curated collection of trendy footwear.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/shop" className="text-purple-200 hover:text-white">Shop</Link></li>
                <li><Link href="/about" className="text-purple-200 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-purple-200 hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="text-purple-200 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-purple-200">123 Shoe Street, Footwear City, FC 12345</p>
              <p className="text-purple-200">Email: info@shoestore.com</p>
              <p className="text-purple-200">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-200 hover:text-white"><Facebook /></a>
                <a href="#" className="text-purple-200 hover:text-white"><Twitter /></a>
                <a href="#" className="text-purple-200 hover:text-white"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}