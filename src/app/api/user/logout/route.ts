import { connect } from "@/DBconfi/DBconfig.js";
import { User } from "@/models/user.Model.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
require('dotenv').config();

connect()

export async function GET(request:NextRequest) {
    
    const response = NextResponse.json({
        message : "Logout Successfully",
        Seccess : true
    })

    response.cookies.set("token" , "" , {
        httpOnly : true,
        expires : new Date(0)
    })

    return response
    
}
