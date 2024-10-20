"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ShoppingCart,
  Menu,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const NavItems = () => (
    <>
      <Link
        href="/"
        className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        HOME
      </Link>
      <Link
        href="/shop"
        className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        SHOP
      </Link>
      <Link
        href="/about"
        className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        ABOUT
      </Link>
      <Link
        href="/contact"
        className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        CONTACT
      </Link>
    </>
  );

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
                <Link
                  href="/login"
                  className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  LOGIN/SIGNUP
                </Link>
                <Link
                  href="/cart"
                  className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <ShoppingCart className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden text-black border-white"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] bg-purple-700"
                >
                  <nav className="flex flex-col gap-4">
                    <NavItems />
                    <Link
                      href="/login"
                      className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      LOGIN/SIGNUP
                    </Link>
                    <Link
                      href="/cart"
                      className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      <ShoppingCart className="h-6 w-6 mr-2" /> CART
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-purple-700 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      Maholi Road, Mathura, Uttar Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">8006993647</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">amarrajput2006@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-purple-700 mb-6">
                Business Hours
              </h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6">
            Find Us
          </h2>
          <div className="bg-gray-300 h-96 rounded-lg">
            {/* Replace this div with an actual map component */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153163!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed0!2sYour%20Location!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau" // Added Google Maps iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-10 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">ShoeStore</h3>
              <p className="text-purple-200">
                Step into your style with our curated collection of trendy
                footwear.
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/shop"
                    className="text-purple-200 hover:text-white"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-purple-200 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-purple-200 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-purple-200 hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-purple-200">
                Maholi Road, Mathura, Uttar Pradesh
              </p>
              <p className="text-purple-200">Email: amarrajput2006@gmail.com</p>
              <p className="text-purple-200">Phone: 8006993647</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-200 hover:text-white">
                  <Facebook />
                </a>
                <a href="#" className="text-purple-200 hover:text-white">
                  <Twitter />
                </a>
                <a href="#" className="text-purple-200 hover:text-white">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>
              &copy; {new Date().getFullYear()} ShoeStore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
