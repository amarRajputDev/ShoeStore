import { connect } from "@/DBconfi/DBconfig.js";
import { User } from "@/models/user.Model.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
require('dotenv').config();

connect()

export async function POST(request:NextRequest) {
    const data = await request.json()
   try {
    const {email , name , password}:any = data

    console.log(data)

    const isUserExist = await User.findOne({email})
    console.log("JWT_SECRET:", process.env.JWT_SECRET);

    if (isUserExist) {
        return NextResponse.json({
            message : "User Already Exist",
        },{status:400})
    }
    console.log("user not exist")

    const hashpassword = await bcryptjs.hash(password, 10)

    const newUser = new User({
        name,
        password :hashpassword,
        email
    })

    const saveduser = await newUser.save()
    console.log("user saved")

   const token = jwt.sign({ id: saveduser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
   
   const response = NextResponse.json({
    message : "Signup Successfully"
   },{status : 201})

   response.cookies.set("token" , token ,{
    httpOnly : true
   })

   } catch (error) {
    return NextResponse.json({message : "Something went wrong" , error}, {status:500})
   }

    
}
