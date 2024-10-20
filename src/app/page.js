// import Image from "next/image";
"use client"
import HomePage from "@/Components/Home";
import Navbar from "@/Components/Navbar";
import AuthPage from "@/Components/Signup";
import useUserStore from "@/store/Userstore";

export default function Home() {

  const {user} = useUserStore()

  return (
 
    
    <HomePage/> 
   
    
  );
}
