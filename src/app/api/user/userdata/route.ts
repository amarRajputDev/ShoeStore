import { connect } from "@/DBconfi/DBconfig.js";
import { User } from "@/models/user.Model.js";
import { NextRequest, NextResponse } from "next/server";
import getDataFromToken from "@/helpers/getIdToken";

import jwt from 'jsonwebtoken'


connect()

export async function GET(request:NextRequest) {
    
   
    try {
        const id = await getDataFromToken(request)
        const user = await User.findOne({_id:id}).select("-password")
        console.log(user)

        return NextResponse.json({user} , {status : 201})

    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: "An error occurred while fetching user data." }, { status: 500 }); // Ensure a response is returned
    }
    
}
