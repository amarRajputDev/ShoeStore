"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Navbar from './Navbar'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'


export default function AuthPage() {
  const router = useRouter()
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSignupChange = (e) => {
    const { name, value } = e.target
    setSignupData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    const loginDataToSend = { email: loginData.email, password: loginData.password };
    try {
      const response = await axios.post("/api/user/login", loginDataToSend);
      if (response.status === 201) {
        // alert(`Server response: ${response.data.message}`);
        toast.success(response.data.message)
        router.push("/")
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    const response = axios.post("api/user/signup" ,signupData )
    if (response.status === 201) {
      // alert(`Server response: ${response.data.message}`);
      toast.success(response.data.message)
      router.push("/")
    }
    
    console.log('Signup submitted:', signupData)
  }

  return (
    <>
    <Navbar />
    
    <div className="min-h-screen bg-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
    
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-700 mb-6">Welcome Back</h2>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    id="login-email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <Input
                    type="password"
                    id="login-password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Log In
                </Button>
              </form>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800">Forgot password?</a>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-700 mb-6">Create an Account</h2>
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-4">
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    type="text"
                    id="signup-name"
                    name="name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    id="signup-email"
                    name="email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <Input
                    type="password"
                    id="signup-password"
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <Input
                    type="password"
                    id="signup-confirm-password"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Sign Up
                </Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <Link href="/" className="text-sm text-purple-600 hover:text-purple-800">
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
