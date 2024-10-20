"use client"
import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { Package, DollarSign, TrendingUp, Users } from "lucide-react"

export default function AdminPage() {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    inventory: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProductData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setProductData(prevState => ({ ...prevState, category: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle product addition logic here
    console.log('New product submitted:', productData)
    // Reset form after submission
    setProductData({ name: '', category: '', price: '', description: '', inventory: '' })
  }

  // Mock data for sales analysis
  const monthlySales = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
  ]

  const topProducts = [
    { name: 'Classic Sneaker', sales: 1200 },
    { name: 'Running Shoe', sales: 950 },
    { name: 'Casual Loafer', sales: 800 },
    { name: 'Hiking Boot', sales: 600 },
    { name: 'Dress Shoe', sales: 500 },
  ]

  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="add-product" className="space-y-4">
          <TabsList>
            <TabsTrigger value="add-product">Add New Product</TabsTrigger>
            <TabsTrigger value="sales-analysis">Sales Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="add-product" >
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Enter the details of the new product below.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                  <div>
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={productData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sneakers">Sneakers</SelectItem>
                        <SelectItem value="boots">Boots</SelectItem>
                        <SelectItem value="sandals">Sandals</SelectItem>
                        <SelectItem value="dress-shoes">Dress Shoes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={productData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={productData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="inventory">Initial Inventory</Label>
                    <Input
                      id="inventory"
                      name="inventory"
                      type="number"
                      value={productData.inventory}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Add Product
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sales-analysis">
            <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Products</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-8 mt-4">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Monthly Sales</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ChartContainer config={{
                    sales: {
                      label: "Sales",
                      color: "hsl(var(--chart-1))",
                    },
                  }} className="h-[300px] w-[70vw] lg:max-w-[95%] px-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlySales}  >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" name="Sales" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Top 5 best-selling products this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    sales: {
                      label: "Sales",
                      color: "hsl(var(--chart-2))",
                    },
                  }} className="h-[300px] w-[70vw] lg:max-w-[95%]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topProducts} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="sales" fill="var(--color-sales)" name="Sales" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}