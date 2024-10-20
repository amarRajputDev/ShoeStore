import { connect } from "@/DBconfi/DBconfig.js";
import { User } from "@/models/user.Model.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'


connect()

export async function POST(request:NextRequest) {
    const data = await request.json()
   try {
    const {email , password}:any = data

    console.log(data)

    const isUserExist = await User.findOne({email})

    // console.log("JWT_SECRET:", process.env.JWT_SECRET);

    if (!isUserExist) {
        return NextResponse.json({
            message : "User not Exist",
        },{status:404})
    }
    console.log("user exist")

    const isMatch = await bcryptjs.compare(password, isUserExist.password)

    if (!isMatch) {
        return NextResponse.json({message : "invalid credentials" } , {status : 400})
    }


   const token = jwt.sign({ id: isUserExist._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
   
   const response = NextResponse.json({
    message : "login Successfully"
   },{status : 201})

   response.cookies.set("token" , token ,{
    httpOnly : true
   })

   return response

   } catch (error) {
    return NextResponse.json({message : "Something went wrong" , error}, {status:500})
   }

    
}
